import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import { displayBookings } from '../displayBookings'

export const fetchBookings = (username) =>  {
    return function(dispatch){
        axios.get("http://localhost:8600/user/view-bookings/"+username)
        .then(response => {
            dispatch(displayBookings({bookings: response.data,requestStatus: REQUEST_STATUS.SUCCESS}))
        })
        .catch(err => {
            dispatch(displayBookings({message: err.message,requestStatus: REQUEST_STATUS.FAILED}))
        })
    }

}