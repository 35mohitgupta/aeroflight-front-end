import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import { requestReducer } from './requestReducer'
import { createFlightReducer } from './createFlightReducer'

export const rootReducer = combineReducers({
    loginStatus: loginReducer,
    requests: requestReducer,
    createFlight: createFlightReducer
})