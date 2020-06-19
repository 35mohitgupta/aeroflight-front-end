
import {REQUEST_STATUS} from '../utility/api_request_result'
import { DISPLAY_FLIGHT_SEARCH_SUCCESS, DISPLAY_FLIGHT_SEARCH_FAILURE } from './actionTypes'

export const displaySearchResult = ({flights,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: DISPLAY_FLIGHT_SEARCH_SUCCESS,
            flights,
        }
    }else{
        return {
            type: DISPLAY_FLIGHT_SEARCH_FAILURE,
            message
        }
    }
}