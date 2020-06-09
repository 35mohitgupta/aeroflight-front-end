import { message } from "../state/messages";
import { CREATED_FLIGHT } from "../actions/actionTypes";

export const createFlightReducer = (state = message, action) => {
    switch(action.type){
        case CREATED_FLIGHT:
            return {...state,successMsg: action.message}
        default:
            return {...state}
    }
}