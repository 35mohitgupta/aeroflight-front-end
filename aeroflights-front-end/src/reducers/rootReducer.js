import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import { requestReducer } from './requestReducer'
import { createFlightReducer } from './createFlightReducer'
import { offerReducer } from './offerReducer'

export const rootReducer = combineReducers({
    loginStatus: loginReducer,
    requests: requestReducer,
    createFlight: createFlightReducer,
    offer: offerReducer
})