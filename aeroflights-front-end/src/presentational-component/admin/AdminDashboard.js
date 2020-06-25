import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { fetchNoOfRequestMW } from '../../actions/middleware/fetchNoOfRequestMW'
import {connect} from 'react-redux'

function AdminDashboard({username, noPendingRequests,errMsg,fetchNoOfRequests}) {

    useEffect(() => {
        fetchNoOfRequests()
    }, [fetchNoOfRequests])
    console.log('fetch',username)
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-light">
                {
                errMsg ? <h3>{errMsg}</h3> :
                <h3>Hi {username}.<br/> You have {noPendingRequests} requests pending. <Link to="/view-requests">Click here</Link> to view requests</h3>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginStatus.admin.username,
        noPendingRequests: state.requests.noPendingRequests,
        errMsg: state.requests.noPendingRequestsErr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNoOfRequests: () => dispatch(fetchNoOfRequestMW())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard)
