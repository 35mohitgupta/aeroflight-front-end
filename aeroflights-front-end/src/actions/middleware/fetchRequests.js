import axios from 'axios'
import {displayRequests} from '../displayRequests'

export const fetchRequests = () =>  {
    return function(dispatch){
        axios.get("http://localhost:8600/admin/view-requests")
        .then(response => {
            console.log(response.data)
            dispatch(displayRequests(response.data))
        })
        .catch(err => console.log(err))
    }

}