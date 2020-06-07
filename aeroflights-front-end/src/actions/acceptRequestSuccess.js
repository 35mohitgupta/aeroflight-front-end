import { ACCEPT_BOOKING_REQUEST } from "./actionTypes"

export const  acceptRequestSuccess = ({bookingId,message}) => {
    return {
        type: ACCEPT_BOOKING_REQUEST,
        bookingId,
        message
    }
}