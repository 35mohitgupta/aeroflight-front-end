import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import { getNoOfRequests } from '../getNoOfRequests'


export const fetchNoOfRequestMW = () => {
    return dispatch => {
        axios.get('http://localhost:8600/admin/no-of-pending-requests')
        .then( response => {
            dispatch(getNoOfRequests({noOfRequests: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
        })
        .catch( err => {
            dispatch(getNoOfRequests({message: err.message,requestStatus:REQUEST_STATUS.FAILED}))
        })
    }
}