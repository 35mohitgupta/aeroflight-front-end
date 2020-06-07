import axios from 'axios'
import { acceptRequestSuccess } from '../acceptRequestSuccess'
export const acceptRequest = (bookingId) => {
    return  dispatch => {
        console.log('acceptReq',bookingId)
        axios.post('http://localhost:8600/admin/accept-request/'+bookingId)
        .then(response => {
            console.log('action request',response.data,bookingId)
            dispatch(acceptRequestSuccess({bookingId: bookingId, message:response.data}))
        })
    }
}