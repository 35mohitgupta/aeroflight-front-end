import { GET_NO_OF_REQUESTS_SUCCESS, GET_NO_OF_REQUESTS_FAILURE } from '../actions/actionTypes'
import {REQUEST_STATUS} from '../utility/api_request_result'

export const getNoOfRequests = ({noOfRequests,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: GET_NO_OF_REQUESTS_SUCCESS,
            noOfRequests
        }
    }else{
        return {
            type: GET_NO_OF_REQUESTS_FAILURE,
            message
        }
    }
}