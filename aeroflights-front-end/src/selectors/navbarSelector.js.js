import {createSelector} from 'reselect'

const loginStatusSelector = state => state.loginStatus.isUserLoggedIn
const isAdminSelector = state => state.loginStatus.isAdmin
const usernameSelector = state => state.loginStatus.username

export const navBarSelector = createSelector(
    loginStatusSelector,
    isAdminSelector,
    usernameSelector,
    (isUserLoggedIn, isAdmin, username) => {
        let leftNavLink = []
        let rightNavLink = []
        if(isUserLoggedIn === false){
            leftNavLink  = []
            rightNavLink = [
                { link:'/login', linkName:'Login'},
                {link:'/register', linkName:"Register"}
            ]
        }else if(isUserLoggedIn === true && isAdmin===true){
            leftNavLink  = [
                { link:'/view-requests', linkName:'View Requests'},
                { link:'/create-new-flight', linkName:'Create new Flight'},
                { link:'/offers', linkName:'Offers'}
            ]
            rightNavLink = [
                { link:'#', linkName:username},
                {link:'/home', linkName:"Logout"}
            ]
        }else if(isUserLoggedIn === true && isAdmin===false){
            leftNavLink  = [
                { link:'/view-bookings', linkName:'View Bookings'},
                { link:'/book-flight', linkName:'Book a Flight'},
            ]
            rightNavLink = [
                { link:'#', linkName:username},
                {link:'/home', linkName:"Logout"}
            ]
        }
        return {
            leftNavLink,
            rightNavLink
        }
    }
)
