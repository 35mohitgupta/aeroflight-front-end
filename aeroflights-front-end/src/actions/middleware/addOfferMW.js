import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import { addOffer } from '../addOffer'

export const addOfferMW = (offer) => {
    offer.status='ACTIVE'
    return dispatch => {
        axios.post('http://localhost:8600/admin/add-offer',offer)
        .then( response => {
            dispatch(addOffer({offer,message: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
        })
        .catch( err => {
            dispatch(addOffer({message: err.message,requestStatus:REQUEST_STATUS.FAILED}))
        })
    }
}