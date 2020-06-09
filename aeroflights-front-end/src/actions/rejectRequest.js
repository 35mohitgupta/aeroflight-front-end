import { REJECT_BOOKING_FAILURE, REJECT_BOOKING_SUCCESS } from "./actionTypes"
import {REQUEST_STATUS} from '../utility/api_request_result'
export const  rejectRequest = ({bookingId,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: REJECT_BOOKING_SUCCESS,
            bookingId,
            message
        }
    }else{
        return {
            type: REJECT_BOOKING_FAILURE,
            message
        }
    }
}