import { userLoginStatus } from "../state/userloginstate";

export const loginReducer = (state=userLoginStatus,action) => {

    switch(action.type){
        default:
            return state;
    }
}