import { ADD_OFFER_FAILURE, ADD_OFFER_SUCCESS } from "./actionTypes"
import {REQUEST_STATUS} from '../utility/api_request_result'
export const  addOffer = ({offer,message,requestStatus}) => {
    if(requestStatus === REQUEST_STATUS.SUCCESS){
        return {
            type: ADD_OFFER_SUCCESS,
            offer,
            message
        }
    }else{
        return {
            type: ADD_OFFER_FAILURE,
            message
        }
    }
}