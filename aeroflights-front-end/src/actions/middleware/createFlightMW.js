import axios from 'axios'
import { createdFlight } from '../ceatedFlight'

export function createFlight(flight){
    return dispatch => {
        axios.post('http://localhost:8600/admin/create-flight',flight)
        .then(response => {
            dispatch(createdFlight(response.data))
        })
        .catch(err => {
            dispatch(createdFlight(err.message))
        })
    }
}