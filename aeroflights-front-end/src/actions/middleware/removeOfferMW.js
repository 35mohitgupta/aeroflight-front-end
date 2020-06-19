import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import { removeOffer } from '../removeOffer'

export const removeOffersMW = (offerTitle) => {
    return dispatch => {
        axios.put('http://localhost:8600/admin/remove-offer/'+offerTitle)
        .then( response => {
            dispatch(removeOffer({offerTitle,message: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
        })
        .catch( err => {
            dispatch(removeOffer({message: err.message,requestStatus:REQUEST_STATUS.FAILED}))
        })
    }
}