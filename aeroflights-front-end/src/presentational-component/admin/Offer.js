import React,{useState,useEffect,useRef} from 'react'
import { removeOffersMW } from '../../actions/middleware/removeOfferMW'
import {connect} from 'react-redux'

const initialCardClass = "card container-fluid bg-light"

function Offer({offerTitle,discount,status, removeOffer}) {
    const [cardClass, setcardClass] = useState(initialCardClass)

    const discountref = useRef(null)

    useEffect(() => {
        if(status === 'INACTIVE'){
            discountref.current.className = "col-md-4 offset-md-3"
        }else{
            discountref.current.className = "col-md-4"
        }
    }, [status])

    return (
        <div className={cardClass} style={{paddingTop:"1em"}} 
        onMouseEnter = {() => {setcardClass("card container-fluid bg-muted")}}
        onMouseLeave = {() => {setcardClass(initialCardClass)}}>
            <div className="row text-left">
                <div className="col-md-5">
                    <b>Offer Title:</b> &nbsp;  {offerTitle}
                </div>
                <div className="col-md-4" ref={discountref}>
                    <b>Discount:</b> &nbsp;  {discount}%
                </div>
                { (status === 'ACTIVE') &&
                <div className="col-md-3  text-right">
                    <button className="btn btn-info" onClick={(e) =>{removeOffer(offerTitle)}}>Remove</button>
                </div>  }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeOffer: offerTitle => dispatch(removeOffersMW(offerTitle))
    }
}

export default connect(null,mapDispatchToProps)(React.memo(Offer))

