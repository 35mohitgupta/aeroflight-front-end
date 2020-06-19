import React,{useState,useRef,useEffect} from 'react'
import {searchFlightMW} from '../../actions/middleware/searchFlightsMW'
import {connect} from 'react-redux'
import Flights from './Flights';

function sortBy(sortParam){
    if(sortParam === 'price'){
        return (flight1, flight2) =>  {
            if(flight1.user.price > flight2.user.price)
                return 1;
            else if(flight1.user.price < flight2.user.price)
                return -1;
            return 0;
        }
    }else if(sortParam === 'departure'){
        return (flight1, flight2) => {
            if(flight1.flight.departure > flight2.flight.departure)
            return 1;
        else if(flight1.flight.departure < flight2.flight.departure)
            return -1;
        return 0;
        }
    }else
        return (flight1, flight2) => 0
}


function BookAFlight({searchedFlight,searchFlights,searchErr}) {

    const [source, setsource] = useState('')
    const [destination, setdestination] = useState('')
    const [departDate, setdepartDate] = useState('')
    const [sortParam, setsortParam] = useState('')

    const buttonref = useRef(null)

    let flightResult = undefined
    if(searchedFlight.length !== 0){
        flightResult = 
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="card">
                        <div className="card-header bg-info container-fluid">
                            <div className="text-light row">
                                <div className="col-md-6 text-left"><h3>FLIGHTS... </h3></div>
                                <div  className="col-md-2 offset-md-4 text-right" >
                                    <select name="sort" value={sortParam} onChange = {(event) =>{ setsortParam(event.target.value)}} className="form-control">
                                        <option>Sort By</option>
                                        <option value="departure">Departure</option>
                                        <option value="price">Price</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {searchedFlight && searchedFlight
                            .sort(sortBy(sortParam))
                            .map(flight => <Flights key="flightNo" flight={flight}/>)
                            }
                        </div>
                    </div>
                </div>
        </div>
    }

    useEffect(() => {
        if(!source || !destination || !departDate){
            buttonref.current.disabled = true
            return
        }else if(source === destination){
            buttonref.current.disabled = true
            return
        }else{
            const depart = new Date(departDate)
            const today = new Date()
            if(today>= depart)
                buttonref.current.disabled = true
            else
                buttonref.current.disabled= false
        }
    }, [source,destination,departDate])

    function fetchBookings(event){
        event.preventDefault()
        searchFlights(source,destination,departDate)
    }

    return (
        <>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="card">
                        <div className="card-header bg-info text-light">
                            <h3>Book A Flight</h3>
                        </div>
                        <div className="card-body container-fluid   ">
                            <form onSubmit={fetchBookings}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="source">FROM: </label> &nbsp;
                                        <input className="form-control" type="text" value={source} onChange={e => setsource(e.target.value)}/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="destination">TO: </label> &nbsp;
                                        <input className="form-control" type="text" value={destination} onChange={e => setdestination(e.target.value)}/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="date">Date: </label> &nbsp;
                                        <input className="form-control" type="date" value={departDate} onChange={e => setdepartDate(e.target.value)}/>
                                    </div>
                                    
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 offset-md-3" >
                                        <button ref={buttonref} className="btn btn-block btn-info" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        { searchErr &&
                            <div className="card-footer text-danger">
                            {searchErr}
                        </div>}
                    </div>
                </div> 
            </div>
            {flightResult}
        </>
    )
}

const mapStateToProps = state => {
    return {
        searchedFlight: state.flightSearch.searchedFlight,
        searchErr: state.flightSearch.searchErr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchFlights: (from,to,date) => dispatch(searchFlightMW(from,to,date))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookAFlight)
