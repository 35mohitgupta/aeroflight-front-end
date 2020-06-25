import { GET_NO_OF_BOOKINGS_SUCCESS, GET_NO_OF_BOOKINGS_FAILURE } from '../actions/actionTypes'
import {REQUEST_STATUS} from '../utility/api_request_result'

export const getNoOfBookings = ({noOfBookings,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: GET_NO_OF_BOOKINGS_SUCCESS,
            noOfBookings
        }
    }else{
        return {
            type: GET_NO_OF_BOOKINGS_FAILURE,
            message
        }
    }
}