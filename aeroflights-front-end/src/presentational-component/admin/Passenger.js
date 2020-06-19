import React from 'react'

function Passenger(props) {
    const {name,age,gender} = props.pass
    return (
        <div className="card container-fluid bg-light">
            <div className="row text-left"  style={{paddingTop:"1em"}}>
                <div className="col-md-5">
                    <b>Name: &nbsp;</b> {name}
                </div>
                <div className="col-md-3">
                    <b>Age: &nbsp;</b> {age}
                </div>
                <div className="col-md-4">
                    <b>Gender: &nbsp;</b> {gender}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Passenger)