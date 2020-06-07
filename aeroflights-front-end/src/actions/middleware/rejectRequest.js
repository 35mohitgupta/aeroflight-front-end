import axios from 'axios'
import { rejectRequestSuccess } from '../rejectRequestSuccess'
export const rejectRequest = (bookingId) => {
    return  dispatch => {
        axios.post('http://localhost:8600/admin/reject-request/'+bookingId)
        .then(response => {
            console.log('action request',response.data,bookingId)
            dispatch(rejectRequestSuccess({bookingId: bookingId, message:response.data}))
        })
    }
}