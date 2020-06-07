import {DISPLAY_REQUESTS} from './actionTypes'

export const displayRequests = (requests) => {
    return {
        type: DISPLAY_REQUESTS,
        payload: requests
    }
}