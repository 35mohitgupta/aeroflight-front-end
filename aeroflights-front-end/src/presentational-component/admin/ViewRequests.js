import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchRequests} from '../../actions/middleware/fetchRequests'
import Requests from './Requests'


function ViewRequests({requests,fetchRequests,acceptMsg,rejectMsg}) {

    useEffect(() => {
        fetchRequests()
    }, [])

    return (
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="card">
                    <div className="card-header bg-info container-fluid">
                        <div className="card-title text-light row">
                            <div className="col-md-5 text-left"><h3>REQUESTS...</h3></div>
                            <div  className="col-md-2 offset-md-3 text-right" >
                                <select name="filter" className="form-control">
                                    <option>Filter</option>
                                    <option>Flight No</option>
                                    <option>gggg</option>
                                </select>
                            </div>
                            <div  className="col-md-2 text-right" >
                                <select name="sort" className="form-control">
                                    <option>Filter</option>
                                    <option>Username</option>
                                    <option>Departure</option>
                                    <option>Arrival</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {requests && requests.map( req =>
                            <div  key={req.bookingId}>
                                <Requests request = {req}/>
                                <br/>
                            </div>
                        )}
                    </div>
                    <div className="card-footer">
                        <div className="text-success">{acceptMsg}</div>
                        <div className="text-danger">{rejectMsg}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {

    return {
        requests: store.requests.requestList,
        acceptMsg: store.requests.acceptMsg,
        rejectMsg: store.requests.rejectMsg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRequests : () => dispatch(fetchRequests())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewRequests)


