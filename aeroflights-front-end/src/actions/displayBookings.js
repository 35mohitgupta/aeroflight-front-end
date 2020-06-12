import {DISPLAY_BOOKINGS_SUCCESS, DISPLAY_BOOKINGS_FAILURE} from './actionTypes'
import {REQUEST_STATUS} from '../utility/api_request_result'

export const displayBookings = ({bookings,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: DISPLAY_BOOKINGS_SUCCESS,
            bookings,
        }
    }else{
        return {
            type: DISPLAY_BOOKINGS_FAILURE,
            message
        }
    }
}