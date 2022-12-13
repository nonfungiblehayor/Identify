import React from 'react'

function Steps(props) {
    return <div className='steps'>
        <h4>{props.head}</h4>
        <p>{props.sub}</p>
    </div>
}

export default Steps