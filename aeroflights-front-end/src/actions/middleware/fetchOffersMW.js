import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import { fetchOffers } from '../fetchOffers'

export const fetchOffersMW = () => {
    return dispatch => {
        axios.get('http://localhost:8600/admin/view-offers')
        .then( response => {
            dispatch(fetchOffers({offers: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
        })
        .catch( err => {
            dispatch(fetchOffers({message: err.message,requestStatus:REQUEST_STATUS.FAILED}))
        })
    }
}