
import { DISPLAY_FLIGHT_SEARCH_SUCCESS, DISPLAY_FLIGHT_SEARCH_FAILURE } from '../actions/actionTypes';
import { flightBooking } from '../state/flightBooking';


export const bookFlightReducer = (state = flightBooking ,action) => {
    switch(action.type){
        case DISPLAY_FLIGHT_SEARCH_SUCCESS:
            return {...state, 
                searchedFlight: action.flights,
                searchErr:''
            }
        case DISPLAY_FLIGHT_SEARCH_FAILURE:
            return {
                ...state,
                searchErr: action.message,
                searchedFlight:[]
            }
        default:
            return state
    }
}