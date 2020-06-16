import React from 'react'
import {connect} from 'react-redux'
import {bookFlightSelector} from '../../selectors/bookingFlightSelector'

function BookingFinal({flight}) {  
    const {flightNo,departure,arrival,price,source,destination} = flight
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header bg-info">
                        <h3>Booking Details</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="flightNo" className="col-sm-4 col-form-label">Flight No.:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" id="flightNo" value = {flightNo}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="source" className="col-sm-4 col-form-label">Source :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" id="source" value = {source}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="destination" className="col-sm-4 col-form-label">Destination :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" id="destination" value = {destination}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="departure" className="col-sm-4 col-form-label">Departure :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" id="departure" value = {departure}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="arrival" className="col-sm-4 col-form-label">Arrival :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" id="arrival" value = {arrival}/>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const flightNo =  ownProps.match.params.flightNo
    console.log('mapStateToProps',flightNo)
    return {
        flight: bookFlightSelector(state,flightNo)
    }
}

export default connect(mapStateToProps)(BookingFinal)
