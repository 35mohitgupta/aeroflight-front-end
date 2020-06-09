import { ACCEPT_BOOKING_SUCCESS, ACCEPT_BOOKING_FAILURE } from "./actionTypes"
import {REQUEST_STATUS} from '../utility/api_request_result'

export const  acceptRequest = ({bookingId,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: ACCEPT_BOOKING_SUCCESS,
            bookingId,
            message
        }
    }else{
        return {
            type: ACCEPT_BOOKING_FAILURE,
            message
        }
    }
   
    
}