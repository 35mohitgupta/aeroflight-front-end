import { REMOVE_OFFER_SUCCESS, REMOVE_OFFER_FAILURE } from "./actionTypes"
import {REQUEST_STATUS} from '../utility/api_request_result'
export const  removeOffer = ({offerTitle,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: REMOVE_OFFER_SUCCESS,
            offerTitle,
            message
        }
    }else{
        return {
            type: REMOVE_OFFER_FAILURE,
            message
        }
    }
}