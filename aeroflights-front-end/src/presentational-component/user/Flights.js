import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const initialCardClass = "card container-fluid bg-light"

function Flights({flight}) {
    const {flightNo,source,destination,departure,arrival,price}=flight
    const [cardClass, setcardClass] = useState(initialCardClass)
    const [isExpanded, setisExpanded] = useState(false)
    console.log('flightNo', flightNo)
    const history = useHistory()
    return (
        <div className={cardClass} style={{paddingTop:"1em"}} 
            onMouseEnter = {() => {setcardClass("card container-fluid bg-muted")}}
            onMouseLeave = {() => {setcardClass(initialCardClass); setisExpanded(false)}}
            onClick = {() => setisExpanded(true)}>
            <div className="row text-left">
                <div className="col-md-3">
                    <b>Flight No:</b> &nbsp;  {flightNo}
                </div>
                <div className="col-md-5">
                    <b>Departure:</b> &nbsp;  {departure}
                </div>
                <div className="col-md-4">
                    <b>Arrival:</b> &nbsp; {arrival}
                </div>  
            </div>
            {isExpanded &&
                <>
                    <div className="row text-left">
                        <div className="col-md-3">
                            <b>Source:</b> &nbsp;  {source}
                        </div>
                        <div className="col-md-5">
                            <b>Destination:</b> &nbsp; {destination}
                        </div>
                        <div className="col-md-4">
                            <b>Price/Ticket:</b> &nbsp; {price}
                        </div>  
                    </div>
                    <div className="row text-left">
                        <div className="col-md-6 offset-md-3">
                            <button className="btn btn-block btn-info" onClick={e=> {console.log('flight',flightNo); history.replace('/final-book/'+flightNo)}}>Book this Flight</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Flights
