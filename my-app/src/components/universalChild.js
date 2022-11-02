import React from 'react'

function ChildDiv(props) {
    return <div className={props.className}>
        <div>
        <h4>A UNIVERSAL DIGITAL IDENTITY</h4>
        <p>{props.text}</p>
        </div>
        <img src={props.pfp}></img>
    </div>
}

export default ChildDiv