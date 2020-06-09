import axios from 'axios'
import { createdFlight } from '../ceatedFlight'

export function createFlight(flight){
    return dispatch => {
        axios.post('http://localhost:8600/admin/create-flight',flight)
        .then(response => {
            console.log('create response',response.data)
            dispatch(createdFlight(response.data))
        })
        .catch(err => {
            console.log(err.message)
            dispatch(createdFlight(err.message))
        })
    }
}