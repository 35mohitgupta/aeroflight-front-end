import React from 'react'
import {connect} from 'react-redux'
import { navBarSelector } from '../selectors/navbarSelector.js'
import {Link} from 'react-router-dom'

function Navbar({leftNavLink, rightNavLink}) {
    console.log(leftNavLink,rightNavLink)
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-md bg-info navbar-dark">
                    <Link className="navbar-brand" to="/home">AeroFlights</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapse">
                        <ul className="navbar-nav">
                            {leftNavLink!==[] && leftNavLink.map((links,index) => 
                            <li key={index} className="nav-item">
                                   <Link className='nav-link' to={links.link}>{links.linkName}</Link>
                            </li>
                            )}
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {rightNavLink!==[] && rightNavLink.map( (links,index) => 
                                <li key={index} className="nav-item">
                                    <Link className='nav-link' to={links.link}>{links.linkName}</Link>
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
    return navBarSelector(store)
}

export default React.memo(connect(mapStateToProps)(Navbar))
