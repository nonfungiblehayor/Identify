import React from 'react';

function FooterDiv (props) {
    return <div className='sub-div'>
        <h5>{props.head}</h5>
        <a href='#'>{props.link}</a>
        <a href='#'>{props.link2}</a>
    </div>
}

export default FooterDiv;