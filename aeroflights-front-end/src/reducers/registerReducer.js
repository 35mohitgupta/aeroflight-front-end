import { userRegisterStatus } from "../state/userRegisterstate";

const registerReducer = (state=userRegisterStatus,action) => {

    switch(action.type){
        case 'register':
            return action.payload;
        default:
            return state;
    }
}
export default registerReducer;