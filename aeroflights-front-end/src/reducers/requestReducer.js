import {DISPLAY_REQUESTS, ACCEPT_BOOKING_REQUEST, REJECT_BOOKING_REQUEST} from '../actions/actionTypes'
import { requests } from '../state/requests'

export const requestReducer = (state = requests ,action) => {
    let updateRequestList = null;
    switch(action.type){
        case DISPLAY_REQUESTS:
            return {...state, 
                requestList: action.payload
            }
        case ACCEPT_BOOKING_REQUEST:
            updateRequestList = state.requestList.filter(request => request.bookingId !== action.bookingId)
            return {...state,
                requestList: updateRequestList,
                acceptMsg: action.message,
                rejectMsg:''
            }
        case REJECT_BOOKING_REQUEST:
            updateRequestList = state.requestList.filter(request => request.bookingId !== action.bookingId)
            return {...state,
                requestList: updateRequestList,
                rejectMsg: action.message,
                acceptMsg:''
            }
        default:
            return state
    }
}