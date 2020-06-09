import axios from 'axios'
import { rejectRequest } from '../rejectRequest'
import {REQUEST_STATUS} from '../../utility/api_request_result'

export const rejectRequestMW = (bookingId) => {
    return  dispatch => {
        axios.put('http://localhost:8600/admin/reject-request/'+bookingId)
        .then(response => {
            console.log('action request',response.data,bookingId)
            dispatch(rejectRequest({bookingId: bookingId, message:response.data,requestStatus: REQUEST_STATUS.SUCCESS}))
        })
        .catch(err => {
            dispatch(rejectRequest({message:err.message,requestStatus: REQUEST_STATUS.FAILED}))
        })
    }
}