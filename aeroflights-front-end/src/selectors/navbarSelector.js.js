import {createSelector} from 'reselect'

const loginStatusSelector = state => state.loginStatus.isUserLoggedIn
const isAdminSelector = state => state.loginStatus.isAdmin

export const navBarSelector = createSelector(
    loginStatusSelector,
    isAdminSelector,
    (isUserLoggedIn, isAdmin) => {
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
                { link:'/view-request', linkName:'View Requests'},
                { link:'/create-new-flight', linkName:'Create new Flight'},
                { link:'/offers', linkName:'Offers'}
            ]
            rightNavLink = [
                { link:'#', linkName:'username'},
                {link:'/home', linkName:"Logout"}
            ]
        }else if(isUserLoggedIn === true && isAdmin===false){
            leftNavLink  = [
                { link:'/view-request', linkName:'View Bookings'},
                { link:'/create-new-flight', linkName:'Book a Flight'},
            ]
            rightNavLink = [
                { link:'#', linkName:'username'},
                {link:'/home', linkName:"Logout"}
            ]
        }
        return {
            leftNavLink,
            rightNavLink
        }
    }
)
