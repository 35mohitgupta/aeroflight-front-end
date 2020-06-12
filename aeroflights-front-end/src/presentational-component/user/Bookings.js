import React,{useState} from 'react'
import Passenger from '../admin/Passenger'
import { cancelBookingMW } from '../../actions/middleware/cancelBookingMW'
import {connect} from 'react-redux'

const initialCardClass = "card container-fluid bg-light"

function Bookings({booking,cancelBooking}) {
    const {bookingId,flight,noOfTickets,passengerList, offerApplied,totalAmount,bookingStatus} = booking
    const [cardClass, setcardClass] = useState(initialCardClass)
    const [isExpanded, setisExpanded] = useState(false)
    return (
        <div className={cardClass} style={{paddingTop:"1em"}} 
            onMouseEnter = {() => {setcardClass("card container-fluid bg-muted")}}
            onMouseLeave = {() => {setcardClass(initialCardClass); setisExpanded(false)}}
            onClick = {() => setisExpanded(true)}>
            <div className="row text-left">
                <div className="col-md-6">
                    <b>Booking Id:</b> &nbsp;  {bookingId}
                </div>
                <div className="col-md-6">
                    <b>Flight No.:</b> &nbsp;  {flight && flight.flightNo}
                </div>
            </div>
            {isExpanded &&
                <React.Fragment>
                    <div className="row text-left">
                        <div className="col-md-6">
                            <b>Source:</b> &nbsp;  {flight && flight.source}
                        </div>
                        <div className="col-md-6">
                            <b>Destination:</b> &nbsp; {flight && flight.destination}
                        </div>  
                    </div>
                    <div className="row text-left">
                        <div className="col-md-6">
                            <b>Departure:</b> &nbsp;  {flight && flight.departure}
                        </div>
                        <div className="col-md-6">
                            <b>Arrival:</b> &nbsp; {flight && flight.arrival}
                        </div>  
                    </div>
                    <div className="row text-left">
                        <div className="col-md-6">
                            <b>Offer Applied:</b> &nbsp; {offerApplied && offerApplied.offerTitle}
                        </div>
                        <div className="col-md-6">
                            <b>Toal Amount:</b> &nbsp;  {totalAmount}
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-6">
                            <b>No. of Tickets:</b> &nbsp; {noOfTickets}
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-6">
                            <b>Passengers: </b>
                        </div>
                    </div>
                    {passengerList && passengerList.map(passenger => 
                            <Passenger pass={passenger} key={passenger.passengerId}/>
                        )}
                    {(bookingStatus === 'REQUESTED' || bookingStatus === 'ACCEPTED') && 
                    <div className="row text-left" style={{paddingTop:"1em"}}>
                        <div className="col-md-6">
                            <button className="btn btn-info"onClick={e => cancelBooking(bookingId)}>CANCEL</button>
                        </div>
                    </div>
                    }
                </React.Fragment>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        cancelBooking: bookingId => dispatch(cancelBookingMW(bookingId))
    }
}

export default connect(null,mapDispatchToProps)(React.memo(Bookings))
