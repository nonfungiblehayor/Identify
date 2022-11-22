import React from "react";

function Case(props) {
    return <div className="case">
        <nav className="bg-nav">

        </nav>
        <span>
            {props.text}
        </span>
    </div>
}

export default Case