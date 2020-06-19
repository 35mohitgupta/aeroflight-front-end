import React, {useEffect, useRef, useState, useCallback } from 'react'
import {connect} from 'react-redux'
import {bookFlightSelector} from '../../selectors/bookingFlightSelector'
import { fetchCurrentOffersMW } from '../../actions/middleware/fetchCurrentOfferMW'
import PassengerBook from './PassengerBook'
import {useHistory} from 'react-router-dom'
import {bookFlightMW} from '../../actions/middleware/bookFlightMW'

function BookingFinal({flight,fetchCurrentOffers,currentoffers,user,bookAFlight,bookingSuccess,bookingFailure}) {  
    const {flightNo,departure,arrival,price,source,destination} = flight
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [gender, setgender] = useState('GENDER')
    const [showAddPassenger, setshowAddPassenger] = useState(false)
    const [offerControl, setofferControl] = useState({discount:0})
    const [passengers, setpassengers] = useState([])

    const addPassengerBtn = useRef(null)

    const history = useHistory()

    useEffect(() => {
        fetchCurrentOffers()
    }, [fetchCurrentOffers])
    
    function addPassenger(event){
        event.preventDefault()
        setshowAddPassenger(true)
        addPassengerBtn.current.disabled=true
    }

    function cancelPassenger(event){
        event.preventDefault()
        setshowAddPassenger(false)
        addPassengerBtn.current.disabled=false
    }

    function savePassenger(event){
        event.preventDefault()
        setpassengers([...passengers, {name,age,gender}])
        setname('')
        setage('')
        setgender('GENDER')
        setshowAddPassenger(false)
        addPassengerBtn.current.disabled=false
    }

    const removePassenger = useCallback(
        (passName,passAge,passGender) => {
            setpassengers(passengers => passengers.filter(passenger => !(passenger.name === passName && passenger.age === passAge && passenger.gender === passGender)))
        },
        [],
    )

    useEffect(() => {
        if(bookingSuccess){
            alert(bookingSuccess)
            history.replace('/book-flight')
        }
        if(bookingFailure)
            alert(bookingFailure) 
    }, [bookingSuccess,bookingFailure,history])

    function bookFlight(event){
        event.preventDefault()
        const booking = {
            flight,
            offerApplied:offerControl,
            noOfTickets:passengers.length,
            totalAmount:(price* passengers.length * (100 - offerControl.discount)/100.0),
            bookingStatus: 'REQUESTED',
            user,
            passengerList:passengers
        }
        const confirmBooking = window.confirm("Do you want to book this flight?")
        if(confirmBooking){
            bookAFlight(booking)
        }
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header bg-info text-light">
                        <h3>Booking Details</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group row" style={{paddingBottom:"0em"}}>
                                <label htmlFor="flightNo" className="col-sm-4 col-form-label text-left font-weight-bold">Flight No.:</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="flightNo" value = {flightNo}/>
                                </div>
                            </div>
                            <div className="form-group row"  style={{paddingBottom:"0em"}}>
                                <label htmlFor="source" className="col-sm-4 col-form-label  text-left font-weight-bold">Source :</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="source" value = {source}/>
                                </div>
                            </div>
                            <div className="form-group row"  style={{paddingBottom:"0em"}}>
                                <label htmlFor="destination" className="col-sm-4 col-form-label  text-left font-weight-bold">Destination :</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="destination" value = {destination}/>
                                </div>
                            </div>
                            <div className="form-group row"  style={{paddingBottom:"0em"}}>
                                <label htmlFor="departure" className="col-sm-4 col-form-label  text-left font-weight-bold">Departure :</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="departure" value = {departure}/>
                                </div>
                            </div>
                            <div className="form-group row"  style={{paddingBottom:"0em"}}>
                                <label htmlFor="arrival" className="col-sm-4 col-form-label  text-left font-weight-bold">Arrival :</label>
                                <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="arrival" value = {arrival}/>
                                </div>
                            </div>
                            
                            {(passengers && passengers.length !== 0) && 
                            passengers.map((passenger,index) =>{
                                return <PassengerBook key={index} passenger={passenger} removePassenger={removePassenger}/>
                            })
                            }
                            <div className="form-froup row"  style={{paddingTop:"1em"}}>
                                <button className="btn btn-info" ref={addPassengerBtn} onClick = {addPassenger}>Add Passenger</button>
                            </div>
                            {showAddPassenger && 
                            <>
                                <div className="form-group row" style={{paddingBottom:"0em"}}>
                                    <label htmlFor="name" className="col-sm-4 col-form-label text-left font-weight-bold">Name:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="name" value = {name} onChange={e => setname(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group row" style={{paddingBottom:"0em"}}>
                                    <label htmlFor="age" className="col-sm-4 col-form-label text-left font-weight-bold">Age:</label>
                                    <div className="col-sm-8">
                                        <input type="number" className="form-control" id="age" value = {age} onChange={e => {setage(e.target.value)}}/>
                                    </div>
                                </div>
                                <div className="form-group row" style={{paddingBottom:"0em"}}>
                                    <label htmlFor="gender" className="col-sm-4 col-form-label text-left font-weight-bold">Gender:</label>
                                    <div className="col-sm-8">
                                        <select className="form-control" id = "gender" value={gender} onChange={e => setgender(e.target.value)}>
                                            <option>GENDER</option>
                                            <option value="MALE">MALE</option>
                                            <option value="FEMALE">FEMALE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row" style={{paddingBottom:"0em"}}>
                                    <button className="col-sm-4 btn btn-info" onClick={savePassenger}>ADD</button>
                                    <button className="col-sm-4 offset-sm-2 btn btn-info" onClick={cancelPassenger}>CANCEL</button>
                                </div>
                            </>
                            }{
                                passengers && (passengers.length !==0) && 
                                <>
                                    <div className="form-group row" style={{paddingBottom:"0em"}}>
                                        <label htmlFor="offer" className="col-sm-4 col-form-label text-left font-weight-bold">Offer :</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" id="offer" onChange={e=> {setofferControl(JSON.parse(e.target.value))}}>
                                                <option value='{"discount": 0}'>None</option>
                                                {currentoffers && currentoffers.map( offer => {
                                                return <option key={offer.offerTitle} value={JSON.stringify(offer)}>
                                                    {offer.discount}%
                                                </option>
                                                }
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{paddingBottom:"0em"}}>
                                        <label htmlFor="price" className="col-sm-4 col-form-label text-left font-weight-bold">Price:</label>
                                        <div className="col-sm-8">
                                        <input type="text" readOnly className="form-control-plaintext" id="departure" value = {price * passengers.length * (100-offerControl.discount)/100}/>
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{paddingBottom:"0em"}}>
                                        <button className="col-sm-4 btn btn-info" onClick={bookFlight}>BOOK</button>
                                        <button className="col-sm-4 offset-sm-2 btn btn-info" onClick={e => history.replace('/book-flight')}>CANCEL</button>
                                    </div>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const flightNo =  ownProps.match.params.flightNo
    return {
        flight: bookFlightSelector(state,flightNo),
        currentoffers: state.flightSearch.currentOffer,
        bookingSuccess: state.flightSearch.bookingSuccess,
        bookingFailure: state.flightSearch.bookingFailure,
        user: state.loginStatus.user
    }
}

const mapDispatchToPops = dispatch => {
    return {
        bookAFlight: (booking) => dispatch(bookFlightMW(booking)),
        fetchCurrentOffers: ()=> dispatch(fetchCurrentOffersMW())
    }
}

export default connect(mapStateToProps,mapDispatchToPops)(BookingFinal)
