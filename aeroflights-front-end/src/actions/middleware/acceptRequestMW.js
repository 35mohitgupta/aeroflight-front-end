import axios from 'axios'
import { acceptRequest } from '../acceptRequest'
import {REQUEST_STATUS} from '../../utility/api_request_result'

export const acceptRequestMW = (bookingId) => {
    return  dispatch => {
        console.log('acceptReq',bookingId)
        axios.put('http://localhost:8600/admin/accept-request/'+bookingId)
        .then(response => {
            console.log('action request',response.data,bookingId)
            dispatch(acceptRequest({bookingId: bookingId, message:response.data,requestStatus: REQUEST_STATUS.SUCCESS}))
        })
        .catch(err => {
            dispatch(acceptRequest({message:err.message,requestStatus: REQUEST_STATUS.FAILED}))
        })
    }
}