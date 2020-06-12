import React,{useState, useEffect} from 'react'
import Bookings from './Bookings';
import {fetchBookings} from '../../actions/middleware/fetchBookings'
import {connect} from 'react-redux'

function sortBy(sortParam){
    if(sortParam === 'departure'){
        return (booking1, booking2) => {
            if(booking1.flight.departure > booking2.flight.departure)
            return 1;
        else if(booking1.flight.departure < booking2.flight.departure)
            return -1;
        return 0;
        }
    }else if(sortParam === 'arrival'){
        return (booking1, booking2) => {
            if(booking1.flight.arrival > booking2.flight.arrival)
            return 1;
        else if(booking1.flight.arrival < booking2.flight.arrival)
            return -1;
        return 0;
        }
    }
    else
        return (booking1, booking2) => 0
}

function ViewBookings({bookings,fetchBookings,username,failureMsg}) {
    const [filter, setFilter] = useState("WAITING")
    const [sortParam, setsortParam] = useState("Sort By")
    useEffect(() => {
        fetchBookings(username)
    }, [fetchBookings,username])
    return (
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="card">
                    <div className="card-header bg-info container-fluid">
                        <div className="card-title text-light row">
                            <div className="col-md-6 text-left"><h3>FLIGHTS {filter}...</h3></div>
                            <div  className="col-md-2 offset-md-2 text-right" >
                                <select name="filter" value={filter} onChange = {(event) => setFilter(event.target.value)} className="form-control">
                                    <option value="WAITING">Waiting</option>
                                    <option  value="ACCEPTED">Accepted</option>
                                    <option value="REJECTED">Rejected</option>
                                    <option value="CANCELLED">Cancelled</option>
                                </select>
                            </div>
                            <div  className="col-md-2 text-right" >
                                <select name="sort" value={sortParam} onChange = {(event) =>{ setsortParam(event.target.value)}} className="form-control">
                                    <option>Sort By</option>
                                    
                                    <option value="departure">Departure</option>
                                    <option value="arrival">Arrival</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {bookings && bookings
                        .filter(booking => {
                            if(filter === 'WAITING' && booking.bookingStatus === 'REQUESTED')
                                return true;
                            else if(filter === 'ACCEPTED' && booking.bookingStatus === 'ACCEPTED')
                                return true;
                            else if(filter === 'REJECTED' && booking.bookingStatus === "REJECTED"){
                                return true;
                            }else if(filter === 'CANCELLED' && booking.bookingStatus === "CANCELLED"){
                                return true;
                            }
                            return false;
                        })
                        .sort(sortBy(sortParam))
                        .map( booking =>
                            <div  key={booking.bookingId}>
                                <Bookings booking={booking}/>
                            </div>
                        )
                        }
                    </div>
                    <div className="card-footer">
                        {/* <div className="text-success">{acceptMsg}</div> */}
                        <div className="text-danger">{failureMsg}</div>
                        {/* <div className="text-danger">{requestFailed}</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        failureMsg: state.bookings.failureMsg,
        username: state.loginStatus.username,
        bookings: state.bookings.bookingList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBookings: (username) => dispatch(fetchBookings(username))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewBookings)
