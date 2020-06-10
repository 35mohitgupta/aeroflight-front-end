import React,{useEffect, useState} from 'react'
import { fetchOffersMW } from '../../actions/middleware/fetchOffersMW'
import { addOfferMW } from '../../actions/middleware/addOfferMW'
import {connect} from 'react-redux'
import Offer from './Offer'

function Offers({offers,addedMsg,removedMsg,viewFailureMsg,addFailureMsg,removeFailureMsg,fetchOffer,addOffer}) {
    
    const [filter, setfilter] = useState('CURRENT')
    const [sortby, setsortby] = useState('SORT BY')

    const [newOfferTitle, setnewOfferTitle] = useState('')
    const [newDiscount, setnewDiscount] = useState('')

    function sortFun(sortby){
        return (offer1,offer2) => {
            if(sortby === 'asc'){
                if(offer1.discount < offer2.discount)
                    return -1
                else if(offer1.discount > offer2.discount)
                    return 1
                else
                    return 0
            }else if(sortby === 'desc'){
                if(offer1.discount < offer2.discount)
                    return 1
                else if(offer1.discount > offer2.discount)
                    return -1
                else
                    return 0
            }else{
                return 0
            }
        }
    }

    useEffect(() => {
        fetchOffer()
    }, [fetchOffer])

    function addOfferHandler(event){
        event.preventDefault()
        addOffer({offerTitle: newOfferTitle, discount: newDiscount})
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="card">
                        <div className="card-header bg-info text-light container-fluid">
                            <div className="text-light row">
                                <div className="col-md-5 text-left"><h3>{filter} OFFERS...</h3></div>
                                <div  className="col-md-3 offset-md-1 text-right" >
                                    <select name="filter" className="form-control" value={filter} onChange={e => setfilter(e.target.value)}>
                                        <option  value="CURRENT">Current</option>
                                        <option value="PREVIOUS">Previous</option>
                                    </select>
                                </div>
                                <div  className="col-md-3 text-right" >
                                    <select name="sort" className="form-control" value={sortby} onChange={e => setsortby(e.target.value)}>
                                        <option>Sort By`</option>
                                        <option value="asc">DISCOUNT ASC</option>
                                        <option value="desc">DISCOUNT DESC</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {offers && offers
                            .filter(offer => {
                                if('CURRENT'=== filter && offer.status === 'ACTIVE')
                                    return true
                                else if('PREVIOUS'=== filter && offer.status === 'INACTIVE')
                                    return true
                                return false
                            })
                            .sort(sortFun(sortby))
                            .map( offer => 
                                <Offer offerTitle={offer.offerTitle} discount={offer.discount} status = {offer.status} key={offer.offerTitle}/>
                            )
                            }
                        </div>
                        <div className="card-footer">
                            <div className="text-danger">{removedMsg}</div>
                            <div className="text-danger">{viewFailureMsg}</div>
                            <div className="text-danger">{removeFailureMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="card">
                        <div className="card-header bg-info text-light text-left">
                            <h3>ADD NEW OFFER...</h3>
                        </div>
                        <div className="card-body">
                            <form className="form-inline" onSubmit={addOfferHandler}>
                                <div className="form-group">
                                    <label htmlFor="offerTitile">
                                        Offer Title: &nbsp;
                                    </label>
                                    <input type="text" id="offerTitle" className="form-control" value={newOfferTitle} onChange={e => setnewOfferTitle(e.target.value)}/>
                                </div>
                                <div className="form-group"  style={{paddingLeft:"1em"}}>
                                    <label htmlFor="discount">
                                        Discount: &nbsp;
                                    </label>
                                    <input type="number" id="discount" className="form-control"  value={newDiscount} onChange={e => setnewDiscount(e.target.value)}/>
                                </div>
                                <div className="form-group" style={{paddingLeft:"3em"}}>
                                    <button className="btn btn-info" type="submit">ADD</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="text-success">{addedMsg}</div>
                            <div className="text-danger">{addFailureMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return {
        offers: state.offer.offerList,
        addedMsg: state.offer.offerAddedMsg,
        removedMsg: state.offer.offerRemovedMsg,
        viewFailureMsg: state.offer.viewFailureMsg,
        addFailureMsg: state.offer.addFailureMsg,
        removeFailureMsg: state.offer.removeFailureMsg,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOffer: () => dispatch(fetchOffersMW()),
        addOffer: (offer) => dispatch(addOfferMW(offer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Offers)
