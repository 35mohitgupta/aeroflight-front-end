import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import {cancelBooking} from '../cancelBooking'

export const cancelBookingMW = (bookingId) => {
    return  dispatch => {
        axios.put('http://localhost:8600/user/cancel-booking/'+bookingId)
        .then(response => {
            console.log('action request',response.data,bookingId)
            dispatch(cancelBooking({bookingId: bookingId, message:response.data,requestStatus: REQUEST_STATUS.SUCCESS}))
        })
        .catch(err => {
            dispatch(cancelBooking({message:err.message,requestStatus: REQUEST_STATUS.FAILED}))
        })
    }
}