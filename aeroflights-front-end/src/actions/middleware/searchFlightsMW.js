import axios from 'axios'
import {REQUEST_STATUS} from '../../utility/api_request_result'
import {displaySearchResult} from '../displaySearchResult'

export const searchFlightMW = (from,to,date) =>  {
    return function(dispatch){
        axios.post('http://localhost:8600/user/flights/'+from+'/'+to,new Date(date))
        .then( response => {
            console.log('search response',response.data)
            if(response.data.length === 0)
                dispatch(displaySearchResult({message: 'No Flights for these input', requestStatus: REQUEST_STATUS.FAILED}))
            else
                dispatch(displaySearchResult({flights: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
        })
        .catch(err => {
            console.log('err', err);
            dispatch(displaySearchResult({message: err.message, requestStatus: REQUEST_STATUS.FAILED}))
        })
    }
}




// return (dispatch) => {
//         console.log('search 2')
//         axios.post(`http://localhost:8600/user/flights/${from}/${to}`,date)
//         .then( response => {
//             console.log('search response',response.data)
//             dispatch(displaySearchResult({flights: response.data,requestStatus:REQUEST_STATUS.SUCCESS}))
//         })
//         .catch(err => {
//             console.log('err', err);
//             dispatch(displaySearchResult({message: err.message, requestStatus: REQUEST_STATUS.FAILED}))
//         })
        
//     }