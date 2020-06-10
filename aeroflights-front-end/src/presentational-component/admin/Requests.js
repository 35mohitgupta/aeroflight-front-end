import React,{useState} from 'react'
import Passenger from './Passenger'
import { acceptRequestMW } from '../../actions/middleware/acceptRequestMW'
import { rejectRequestMW } from '../../actions/middleware/rejectRequestMW'
import {connect} from 'react-redux'

const initialCardClass = "card container-fluid bg-light"

function Requests(props) {
    const {bookingId,flight,noOfTickets,offerApplied,passengerList,totalAmount,user,bookingStatus} = props.request
    const [cardClass, setcardClass] = useState(initialCardClass)
    const [isExpanded, setisExpanded] = useState(false)
    
    let statusVar = <div className="col-md-4 offset-md-1 text-right">
        <button className="btn btn-info" onClick={()=> props.acceptRequest(bookingId)}>ACCEPT</button>&nbsp;&nbsp;
        <button className="btn btn-info" onClick={()=> props.rejectRequest(bookingId)}>REJECT</button>
    </div>

    if(bookingStatus === 'ACCEPTED' || bookingStatus === 'REJECTED'){
        statusVar = <div className="col-md-4 text-left">
            <b>Booking Status:</b> &nbsp; {bookingStatus}
        </div>
    }
    return (
        <div className={cardClass} style={{paddingTop:"1em"}} 
            onMouseEnter = {() => {setcardClass("card container-fluid bg-muted")}}
            onMouseLeave = {() => {setcardClass(initialCardClass); setisExpanded(false)}}
            onClick = {() => setisExpanded(true)}>
            <div className="row text-left">
                <div className="col-md-4">
                    <b>Booking Id:</b> &nbsp;  {bookingId}
                </div>
                <div className="col-md-3">
                    <b>Flight No.:</b> &nbsp;  {flight && flight.flightNo}
                </div>
                <div className="col-md-5">
                    <b>Username:</b> &nbsp; {user && user.username}
                </div>  
            </div>
            {isExpanded &&
                <React.Fragment>
                    <div className="row text-left">
                        <div className="col-md-4">
                            <b>Source:</b> &nbsp;  {flight && flight.source}
                        </div>
                        <div className="col-md-3">
                            <b>Destination:</b> &nbsp; {flight && flight.destination}
                        </div>
                        <div className="col-md-4">
                            <b>No. of Tickets:</b> &nbsp; {noOfTickets}
                        </div>  
                    </div>
                    <div className="row text-left">
                        <div className="col-md-5">
                            <b>Passengers: </b>
                        </div>
                    </div>
                    {passengerList && passengerList.map(passenger => 
                            <Passenger pass={passenger} key={passenger.passengerId}/>
                        )}
                    <div className="row text-left" style={{paddingTop:"10px"}}>
                        <div className="col-md-4">
                            <b>Offer Applied:</b> &nbsp; {offerApplied && offerApplied.offerTitle}
                        </div>
                        <div className="col-md-3">
                            <b>Toal Amount:</b> &nbsp;  {totalAmount}
                        </div>                        
                        {statusVar}
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        acceptRequest : bookingId => dispatch(acceptRequestMW(bookingId)),
        rejectRequest: bookingId => dispatch(rejectRequestMW(bookingId))
    }
}

export default connect(null,mapDispatchToProps)(React.memo(Requests))
