import {DISPLAY_REQUESTS_SUCCESS, DISPLAY_REQUESTS_FAILURE} from './actionTypes'
import {REQUEST_STATUS} from '../utility/api_request_result'

export const displayRequests = ({requests,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: DISPLAY_REQUESTS_SUCCESS,
            payload: requests,
        }
    }else{
        return {
            type: DISPLAY_REQUESTS_FAILURE,
            message
        }
    }
}