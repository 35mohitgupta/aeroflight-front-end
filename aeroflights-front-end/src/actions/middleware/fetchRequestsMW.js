import axios from 'axios'
import {displayRequests} from '../displayRequests'
import {REQUEST_STATUS} from '../../utility/api_request_result'

export const fetchRequests = () =>  {
    return function(dispatch){
        axios.get("http://localhost:8600/admin/view-requests")
        .then(response => {
            console.log(response.data)
            dispatch(displayRequests({requests: response.data,requestStatus: REQUEST_STATUS.SUCCESS}))
        })
        .catch(err => {console.log('err',err)
            dispatch(displayRequests({message: err.message,requestStatus: REQUEST_STATUS.FAILED}))
        })
    }

}