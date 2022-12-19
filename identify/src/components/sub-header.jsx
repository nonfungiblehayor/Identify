import React from "react";
import ComponentCard from '../images/Component1.svg'

function SubHeader() {
    return <section className="sub-header">
        <div className="first-div">
            <h1>
            A unique identity as you choose
            </h1>
            <p>
            Get your unique NFT Identity here
            </p>
        </div>
        <div className="second-div">
            <img src={ComponentCard} alt='nft card'></img>
        </div>

    </section>
}

export default SubHeader