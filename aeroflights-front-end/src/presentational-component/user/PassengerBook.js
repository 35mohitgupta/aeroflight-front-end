import React,{useState} from 'react'

const initialCardClass = "card container-fluid bg-light"

function PassengerBook(props) {
    const {name,age,gender} = props.passenger
    const removePassengerMethod = props.removePassenger
    const [cardClass, setcardClass] = useState(initialCardClass)
    const [isExpanded, setisExpanded] = useState(false)

    function removeClicked(event){
        event.preventDefault()
        removePassengerMethod(name,age,gender)
    }

    return (
        <div className={cardClass} style={{paddingTop:"1em"}} 
            onMouseEnter = {() => {setcardClass("card container-fluid bg-muted")}}
            onMouseLeave = {() => {setcardClass(initialCardClass); setisExpanded(false)}}
            onClick = {() => setisExpanded(true)}>
                
            <div className="row">
                <div className="col-sm-4 font-weight-bold text-left">Name:</div>
                <div className="col-sm-4 text-left">{name}</div>
            </div>
            { isExpanded &&
                <>
                    <div className="row">
                        <div className="col-sm-4 font-weight-bold text-left">Age:</div>
                        <div className="col-sm-4 text-left">{age}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 font-weight-bold text-left">Gender:</div>
                        <div className="col-sm-4 text-left">{gender}</div>
                    </div>
                    <div className="row">
                        <button className=" col-sm-4 btn btn-info" onClick={removeClicked}>Remove</button>
                    </div>
                </>
            }
        </div>
    )
}

export default React.memo(PassengerBook)
