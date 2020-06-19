import axios from 'axios'
import { bookFlight } from '../bookFlight'
import { REQUEST_STATUS } from '../../utility/api_request_result'

export function bookFlightMW(booking){
    return dispatch => {
        axios.post('http://localhost:8600/user/new-booking',booking)
        .then(response => {
            dispatch(bookFlight({message:response.data,requestStatus: REQUEST_STATUS.SUCCESS}))
        })
        .catch(err => {
            dispatch(bookFlight({message: err.message,requestStatus: REQUEST_STATUS.FAILED}))
        })
    }
}