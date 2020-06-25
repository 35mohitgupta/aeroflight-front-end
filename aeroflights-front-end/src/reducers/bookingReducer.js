import { DISPLAY_BOOKINGS_SUCCESS, DISPLAY_BOOKINGS_FAILURE, CANCEL_BOOKING_SUCCESS, CANCEL_BOOKING_FAILURE, GET_NO_OF_BOOKINGS_SUCCESS, GET_NO_OF_BOOKINGS_FAILURE } from '../actions/actionTypes'
import { bookings } from '../state/bookings';


export const bookingReducer = (state = bookings ,action) => {
    switch(action.type){
        case DISPLAY_BOOKINGS_SUCCESS:
            return {...state, 
                bookingList: action.bookings,
                failureMsg:'',
                cancelMsg:''
            }
        case DISPLAY_BOOKINGS_FAILURE:
            return {
                ...state,
                failureMsg: action.message,
                cancelMsg:''
            }
        case CANCEL_BOOKING_SUCCESS:
            let updateBookingList = state.bookingList.map(booking => {
                if(booking.bookingId === action.bookingId)
                    booking.bookingStatus = 'CANCELLED'
                return booking
            })
            return {
                ...state,
                bookingList: updateBookingList,
                failureMsg:'',
                cancelMsg:action.message

            }
        case CANCEL_BOOKING_FAILURE:
            return {
                ...state,
                failureMsg: action.message,
                cancelMsg:''
            }
        case GET_NO_OF_BOOKINGS_SUCCESS:
            return {
                ...state,
                noPendingBookingsErr:'',
                noPendingBookings: action.noOfBookings
            }
        case GET_NO_OF_BOOKINGS_FAILURE:
            return {
                ...state,
                noPendingBookingsErr:action.message,
                noPendingBookings:''
            }
        default:
            return state
    }
}