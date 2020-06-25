import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import { getNoOfBookings } from '../getNoOfBookings'


export const fetchNoOfBookingsMW = (username) => {
    return dispatch => {
        axios.get('http://localhost:8600/user/no-of-pending-bookings/'+username)
        .then( response => {
            dispatch(getNoOfBookings({noOfBookings: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
        })
        .catch( err => {
            dispatch(getNoOfBookings({message: err.message,requestStatus:REQUEST_STATUS.FAILED}))
        })
    }
}