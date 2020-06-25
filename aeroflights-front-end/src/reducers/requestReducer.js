import {DISPLAY_REQUESTS_SUCCESS, ACCEPT_BOOKING_SUCCESS, REJECT_BOOKING_FAILURE, REJECT_BOOKING_SUCCESS, ACCEPT_BOOKING_FAILURE, DISPLAY_REQUESTS_FAILURE, GET_NO_OF_REQUESTS_SUCCESS, GET_NO_OF_REQUESTS_FAILURE} from '../actions/actionTypes'
import { requests } from '../state/requests'

export const requestReducer = (state = requests ,action) => {
    let updateRequestList = null;
    switch(action.type){
        case DISPLAY_REQUESTS_SUCCESS:
            return {...state, 
                requestList: action.payload,
                failureMsg:''
            }
        case DISPLAY_REQUESTS_FAILURE:
            return {
                ...state,
                failureMsg: action.message
            }
        case ACCEPT_BOOKING_SUCCESS:
            updateRequestList = state.requestList.map(request => {
                if(request.bookingId === action.bookingId){
                    request.bookingStatus = 'ACCEPTED'
                }
                return request
            })
            return {...state,
                requestList: updateRequestList,
                acceptMsg: action.message,
                rejectMsg:'',
                failureMsg:''
            }
        case REJECT_BOOKING_SUCCESS:
            updateRequestList = state.requestList.map(request => {
                if(request.bookingId === action.bookingId){
                    request.bookingStatus = 'REJECTED'
                }
                return request
            })
            return {...state,
                requestList: updateRequestList,
                rejectMsg: action.message,
                acceptMsg:'',
                failureMsg:''
            }
        case ACCEPT_BOOKING_FAILURE:
            return {...state,
                rejectMsg: '',
                acceptMsg:'',
                failureMsg:action.message
            }
        case REJECT_BOOKING_FAILURE:
            return {...state,
                rejectMsg: '',
                acceptMsg:'',
                failureMsg:action.message
            }
        case GET_NO_OF_REQUESTS_SUCCESS:
            return {
                ...state,
                noPendingRequestsErr:'',
                noPendingRequests: action.noOfRequests
            }
        case GET_NO_OF_REQUESTS_FAILURE:
            return {
                ...state,
                noPendingRequestsErr:action.message,
                noPendingRequests:''
            }
        default:
            return state
    }
}