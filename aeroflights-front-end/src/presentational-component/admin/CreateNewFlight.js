import React, { useState, useEffect, useRef } from 'react'
import { createFlight } from '../../actions/middleware/createFlightMW'
import { connect } from 'react-redux'

function CreateNewFlight({createFlightProp,errorMessage,successMessage}) {

    const [flightNo, setflightNo] = useState('')
    const [source, setsource] = useState('')
    const [destination, setdestination] = useState('')
    const [departure, setdeparture] = useState('')
    const [arrival, setarrival] = useState('')
    const [price, setprice] = useState('')
    const [noOfSeats, setnoOfSeats] = useState('')
    const [errorMsg, seterrorMsg] = useState('')

    const btnDisableRef = useRef(true)

    useEffect(() => {
        const arrivalTime = new Date(arrival)
        const departureTime = new Date(departure)
        if(arrivalTime<departureTime){
            btnDisableRef.current.disabled = true
            seterrorMsg("Arrival Time Can't be before Departure Time")
            return
        }
        if(source && source === destination){
            btnDisableRef.current.disabled = true
            seterrorMsg("Source and Destination can't be same")
            return
        }
        seterrorMsg('')
        if(flightNo && source && destination && departure && arrival && price && noOfSeats){
            btnDisableRef.current.disabled = false
        }else{
            btnDisableRef.current.disabled = true
        }
    },[flightNo,arrival,departure,source,destination,price,noOfSeats] )
    
    function handleSubmit(event){
        event.preventDefault()
        const flight = {flightNo,
        source,
        destination,
        departure,
        arrival,
        noOfSeats,
        price
        }
        createFlightProp(flight)
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header bg-info text-light">
                        <h3>Create New Flight</h3>
                    </div>
                    <div className="card-body text-left">
                        <form onSubmit = {handleSubmit}>
                            <div className="form-group">
                                <label htmlFor = "flightNo">Flight Number :</label>
                                <input className="form-control" id="flightNo" type="text" name="flightNo" onChange={e => setflightNo(e.target.value)} value={flightNo}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="source">Source : </label>
                                <input className="form-control" id="source" type="text" name="source" onChange={e => setsource(e.target.value)} value={source}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="destination">Destination : </label>
                                <input className="form-control" id="destination" type="text" name="destination" onChange={e => setdestination(e.target.value)} value={destination}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="departure">Departure : </label>
                                <input className="form-control" id="departure" type="datetime-local" name="departure" onChange={e => setdeparture(e.target.value)} value={departure}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="arrival">Arrival : </label>
                                <input className="form-control" id="arrival" type="datetime-local" name="arrival" onChange={e => setarrival(e.target.value)} value={arrival}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="noOfSeats">Number of Seats : </label>
                                <input className="form-control" id="noOfSeats" type="number" name="noOfSeats" onChange={e => setnoOfSeats(e.target.value)} value={noOfSeats}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price : </label>
                                <input className="form-control" id="price" type="number" name="price" onChange={e => setprice(e.target.value)} value={price}/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btn-info" type="submit" ref={btnDisableRef}>CREATE</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="text-danger">{errorMsg}</div>
                        <div className="text-danger">{errorMessage}</div>
                        <div className="text-success">{successMessage}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.createFlight.errorMsg,
        successMessage: state.createFlight.successMsg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createFlightProp: flight => dispatch(createFlight(flight))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateNewFlight)
