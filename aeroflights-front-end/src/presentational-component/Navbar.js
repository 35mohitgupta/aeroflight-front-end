import React from 'react';
import {connect} from 'react-redux';

function Navbar({leftNavLink, rightNavLink}) {
    console.log(leftNavLink,rightNavLink)
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand" href="/home">AeroFlights</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapse">
                        <ul className="navbar-nav">
                            {leftNavLink!==[] && leftNavLink.map((links,index) => 
                            <li key={index} className="nav-item">
                                   <a className='nav-link' href={links.link}>{links.linkName}</a>
                            </li>
                            )}
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {rightNavLink!==[] && rightNavLink.map( (links,index) => 
                                <li key={index} className="nav-item">
                                    <a className='nav-link' href={links.link}>{links.linkName}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    const isUserLoggedIn= store.isUserLoggedIn;
    const isAdmin= store.isAdmin;
    let leftNavLink = [];
    let rightNavLink = [];
    if(isUserLoggedIn === false){
        leftNavLink  = []
        rightNavLink = [
            { link:'/login', linkName:'Login'},
            {link:'/register', linkName:"Register"}
        ];
    }else if(isUserLoggedIn === true && isAdmin===true){
        leftNavLink  = [
            { link:'/view-request', linkName:'View Requests'},
            { link:'/create-new-flight', linkName:'Create new Flight'},
            { link:'/offers', linkName:'Offers'}
        ];
        rightNavLink = [
            { link:'#', linkName:'username'},
            {link:'/home', linkName:"Logout"}
        ];
    }else if(isUserLoggedIn === true && isAdmin===false){
        leftNavLink  = [
            { link:'/view-request', linkName:'View Bookings'},
            { link:'/create-new-flight', linkName:'Book a Flight'}
        ];
        rightNavLink = [
            { link:'#', linkName:'username'},
            {link:'/home', linkName:"Logout"}
        ];
    }
    return {
        leftNavLink,
        rightNavLink
    }
}

export default connect(mapStateToProps)(Navbar);
