import {createStore,applyMiddleware} from 'redux'
import {rootReducer} from '../reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))