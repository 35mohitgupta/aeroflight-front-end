import {REQUEST_STATUS} from '../utility/api_request_result'
import { LOAD_CURRENT_OFFER_SUCCESS, LOAD_CURRENT_OFFER_FAILURE } from './actionTypes'

export const loadCurrentOffers = ({offers,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: LOAD_CURRENT_OFFER_SUCCESS,
            offers,
        }
    }else{
        return {
            type: LOAD_CURRENT_OFFER_FAILURE,
            message
        }
    }
}