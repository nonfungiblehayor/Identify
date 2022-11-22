import React from "react";
import Case from "./case";

function Usecase() {
    return <section className="useCase-section">
        <h3>SOME USE CASES</h3>
        <div className="first-case">
            <Case text='Ownership of an asset is secured by the Ethereum blockchain' />
            <Case text='Ability to use for verificatiion on web3 ecosystems' />
            <Case text='No one can modify the record of ownership' />
        </div>
    </section>
}
export default Usecase