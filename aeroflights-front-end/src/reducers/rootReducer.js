import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer
});
export default rootReducer;