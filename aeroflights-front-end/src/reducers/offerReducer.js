import { offer } from "../state/offer";
import { FETCH_OFFERS_SUCCESS, FETCH_OFFERS_FAILURE, REMOVE_OFFER_SUCCESS, REMOVE_OFFER_FAILURE, ADD_OFFER_SUCCESS, ADD_OFFER_FAILURE } from "../actions/actionTypes";

export const offerReducer = (state=offer, action) => {
    switch(action.type){
        case FETCH_OFFERS_SUCCESS:
            return {
                ...state,
                offerList: action.offers,
                offerAddedMsg: "",
                offerRemovedMsg:"",
                viewFailureMsg:'',
                removeFailureMsg: '',
                addFailureMsg:''
            }
        case FETCH_OFFERS_FAILURE:
            return {
                ...state,
                offerAddedMsg: "",
                offerRemovedMsg:"",
                viewFailureMsg: action.message,
                removeFailureMsg: '',
                addFailureMsg:''
            }
        case REMOVE_OFFER_SUCCESS:
            let updatedOfferList = state.offerList.map( offer => {
                if(action.offerTitle === offer.offerTitle)
                    offer.status = 'INACTIVE'
                return offer
            })
            return {
                ...state,
                offerList: updatedOfferList,
                offerAddedMsg: '',
                offerRemovedMsg: action.message,
                viewFailureMsg: '',
                removeFailureMsg: '',
                addFailureMsg:''
            }
        case REMOVE_OFFER_FAILURE:
            return {
                ...state,
                offerAddedMsg: '',
                offerRemovedMsg: '',
                viewFailureMsg: '',
                removeFailureMsg: action.message,
                addFailureMsg:''
            }
        case ADD_OFFER_SUCCESS:
            let newOfferList = state.offerList.filter(offer => offer.offerTitle !== action.offer.offerTitle)
            return {
                ...state,
                offerList: [...newOfferList,action.offer],
                offerAddedMsg: action.message,
                offerRemovedMsg: '',
                viewFailureMsg: '',
                removeFailureMsg: '',
                addFailureMsg:''
            }
        case ADD_OFFER_FAILURE:
            return {
                ...state,
                offerAddedMsg: '',
                offerRemovedMsg: '',
                viewFailureMsg: '',
                removeFailureMsg: '',
                addFailureMsg: action.message
            }
        default:
            return state;
    }
}