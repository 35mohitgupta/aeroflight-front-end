import {FETCH_OFFERS_SUCCESS, FETCH_OFFERS_FAILURE} from '../actions/actionTypes'
import {REQUEST_STATUS} from '../utility/api_request_result'

export const fetchOffers = ({offers,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: FETCH_OFFERS_SUCCESS,
            offers,
        }
    }else{
        return {
            type: FETCH_OFFERS_FAILURE,
            message
        }
    }
}