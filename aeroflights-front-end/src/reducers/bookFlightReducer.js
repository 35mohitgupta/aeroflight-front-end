
import { DISPLAY_FLIGHT_SEARCH_SUCCESS, DISPLAY_FLIGHT_SEARCH_FAILURE, LOAD_CURRENT_OFFER_SUCCESS, LOAD_CURRENT_OFFER_FAILURE, BOOK_FLIGHT_SUCCESS, BOOK_FLIGHT_FAILURE } from '../actions/actionTypes';
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
        case LOAD_CURRENT_OFFER_SUCCESS:
            return {
                ...state,
                currentOffer: action.offers
            }
        case LOAD_CURRENT_OFFER_FAILURE:
            return {
                ...state,
                currentOfferErr: action.message
            }
        case BOOK_FLIGHT_SUCCESS:
            return {
                ...state,
                searchErr:'',
                currentOfferErr:'',
                bookingSuccess:action.message,
                bookingFailure:''
            }
        case BOOK_FLIGHT_FAILURE:
            return {
                ...state,
                searchErr:'',
                currentOfferErr:'',
                bookingSuccess:'',
                bookingFailure:action.message
            }
        default:
            return state
    }
}