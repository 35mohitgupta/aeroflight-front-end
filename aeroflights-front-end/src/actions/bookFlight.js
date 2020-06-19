import { BOOK_FLIGHT_FAILURE, BOOK_FLIGHT_SUCCESS } from "./actionTypes"
import {REQUEST_STATUS} from '../utility/api_request_result'
export const  bookFlight = ({message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: BOOK_FLIGHT_SUCCESS,
            message
        }
    }else{
        return {
            type: BOOK_FLIGHT_FAILURE,
            message
        }
    }
}