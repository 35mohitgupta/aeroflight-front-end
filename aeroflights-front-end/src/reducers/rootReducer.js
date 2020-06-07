import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import { requestReducer } from './requestReducer'

export const rootReducer = combineReducers({
    loginStatus: loginReducer,
    requests: requestReducer
})