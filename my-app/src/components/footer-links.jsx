import React from "react";

function FooterLink(props) {
    return <div className="foot-links">
        <h5>{props.h5}</h5>
        <a href="/app">{props.links}</a>
        <a href="/app">{props.links2}</a>
    </div>
}

export default FooterLink