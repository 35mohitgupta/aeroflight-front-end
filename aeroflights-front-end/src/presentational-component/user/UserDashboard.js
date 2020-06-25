import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { fetchNoOfBookingsMW } from '../../actions/middleware/fetchNoOfBookingsMW'
import {connect} from 'react-redux'

function AdminDashboard({username, noPendingBooking,errMsg,fetchNoOfBooking}) {

    useEffect(() => {
        fetchNoOfBooking()
    }, [fetchNoOfBooking])
    console.log('fetch',username)
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-light">
                {
                errMsg ? <h3>{errMsg}</h3> :
                <h3>Hi {username}.<br/> You have {noPendingBooking} bookings pending to get accepted. <Link to="/view-bookings">Click here</Link> to view bookings</h3>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginStatus.user.username,
        noPendingBooking: state.bookings.noPendingBookings,
        errMsg: state.bookings.noPendingBookingsErr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNoOfBooking: (user) => dispatch(fetchNoOfBookingsMW(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard)
