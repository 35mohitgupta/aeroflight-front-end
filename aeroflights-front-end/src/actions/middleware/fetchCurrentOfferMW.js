import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'

export const fetchCurrentOffersMW = () => {
    return dispatch => {
        axios.get('http://localhost:8600/user/current-offers')
        .then( response => {
            dispatch(fetchOffers({offers: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
        })
        .catch( err => {
            dispatch(fetchOffers({message: err.message,requestStatus:REQUEST_STATUS.FAILED}))
        })
    }
}