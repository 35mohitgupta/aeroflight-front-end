import { CANCEL_BOOKING_SUCCESS, CANCEL_BOOKING_FAILURE } from "./actionTypes"
import {REQUEST_STATUS} from '../utility/api_request_result'

export const  cancelBooking = ({bookingId,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: CANCEL_BOOKING_SUCCESS,
            bookingId,
            message
        }
    }else{
        return {
            type: CANCEL_BOOKING_FAILURE,
            message
        }
    }
}