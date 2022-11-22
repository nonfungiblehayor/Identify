import React from 'react'
import group from '../images/Group.svg'
import Steps from './steps'
import ComponentCard from '../images/Component1.svg'

function Body() {
    return <section className='working-section'>
        <div className='working-details'>
            <h4>How it works!</h4>
            <p>
            idWeb is an identity minting system helping individuals and 
            organisations easily verify their identities in the web3ecosystem. 
            It makes it possible to reduce identity misplacals.
            </p>
        </div>
        <div className='working-steps'>
            <img src={group} alt='steps' className='list-of-step'></img>
            <nav className='stages'>
                <Steps head='Connect wallet' sub='To start the Identity minting process, your wallet will have to be connected first to the system' />
                <Steps head='Verify Identity' sub='To start the Identity minting process, your wallet will have to be connected first to the system' />
                <Steps head='Signing of transaction' sub='To start the Identity minting process, your wallet will have to be connected first to the system' />
                <Steps head='Gas fee' sub='To start the Identity minting process, your wallet will have to be connected first to the system' />
                <Steps head='Get your on-chain identity' sub='To start the Identity minting process, your wallet will have to be connected first to the system' />               
            </nav>  
            <img src={ComponentCard} alt="nft card" className='nft-card'></img>         
        </div>
    </section>
}

export default Body