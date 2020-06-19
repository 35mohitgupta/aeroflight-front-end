import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchRequests} from '../../actions/middleware/fetchRequestsMW'
import Requests from './Requests'

function sortBy(sortParam){
    if(sortParam === 'username'){
        return (request1, request2) =>  {
            if(request1.user.username > request2.user.username)
                return 1;
            else if(request1.user.username < request2.user.username)
                return -1;
            return 0;
        }
    }else if(sortParam === 'departure'){
        return (request1, request2) => {
            if(request1.flight.departure > request2.flight.departure)
            return 1;
        else if(request1.flight.departure < request2.flight.departure)
            return -1;
        return 0;
        }
    }else if(sortParam === 'arrival'){
        return (request1, request2) => {
            if(request1.flight.arrival > request2.flight.arrival)
            return 1;
        else if(request1.flight.arrival < request2.flight.arrival)
            return -1;
        return 0;
        }
    }
    else
        return (request1, request2) => 0
}

function ViewRequests({requests,fetchRequests,acceptMsg,rejectMsg,requestFailed}) {

    const [filter, setFilter] = useState("PENDING")
    const [sortParam, setsortParam] = useState("Sort By")
    useEffect(() => {
        fetchRequests()
    }, [fetchRequests])

    return (
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="card">
                    <div className="card-header bg-info container-fluid">
                        <div className="card-title text-light row">
                            <div className="col-md-6 text-left"><h3>REQUESTS {filter}...</h3></div>
                            <div  className="col-md-2 offset-md-2 text-right" >
                                <select name="filter" value={filter} onChange = {(event) => setFilter(event.target.value)} className="form-control">
                                    <option value="PENDING">Pending</option>
                                    <option  value="ACCEPTED">Accepted</option>
                                    <option value="REJECTED">Rejected</option>
                                </select>
                            </div>
                            <div  className="col-md-2 text-right" >
                                <select name="sort" value={sortParam} onChange = {(event) =>{ setsortParam(event.target.value)}} className="form-control">
                                    <option>Sort BY</option>
                                    <option value="username">Username</option>
                                    <option value="departure">Departure</option>
                                    <option value="arrival">Arrival</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {requests && requests
                        
                        .filter(request => {
                            if(filter === 'PENDING' && request.bookingStatus === 'REQUESTED')
                                return true;
                            else if(filter === 'ACCEPTED' && request.bookingStatus === 'ACCEPTED')
                                return true;
                            else if(filter === 'REJECTED' && request.bookingStatus === "REJECTED"){
                                return true;
                            }
                            return false;
                        })
                        .sort(sortBy(sortParam))
                        .map( req =>
                            <div  key={req.bookingId}>
                                <Requests request = {req}/>
                                <br/>
                            </div>
                        )
                        }
                    </div>
                    <div className="card-footer">
                        <div className="text-success">{acceptMsg}</div>
                        <div className="text-danger">{rejectMsg}</div>
                        <div className="text-danger">{requestFailed}</div>
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
        rejectMsg: store.requests.rejectMsg,
        requestFailed: store.requests.failureMsg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRequests : () => dispatch(fetchRequests())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewRequests)


