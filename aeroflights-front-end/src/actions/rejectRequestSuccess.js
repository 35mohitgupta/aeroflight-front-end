import { REJECT_BOOKING_REQUEST } from "./actionTypes"

export const  rejectRequestSuccess = ({bookingId,message}) => {
    return {
        type: REJECT_BOOKING_REQUEST,
        bookingId,
        message
    }
}