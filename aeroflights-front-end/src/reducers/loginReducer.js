import { userLoginStatus } from "../state/userloginstate";

const loginReducer = (state=userLoginStatus,action) => {

    switch(action.type){
        case 'login':
            return action.payload;
        default:
            return state;
    }
}
export default loginReducer;