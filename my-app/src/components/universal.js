import React, { Component } from 'react';
import ChildDiv from './universalChild.js'
import Component1 from '../images/Component1.svg'
import Group from '../images/Group.svg'



class Universal extends Component {
    render() {
        const sectionClass = this.props.sec ? 'section2' : ""
        return <section className={sectionClass}>
            <div className='div1'>
                <p>
                identify is an identity minting system helping individuals and 
                organisations easily verify their identities in the web3ecosystem.
                It makes it possible to reduce identity misplacals.
                </p>
            </div>
            <ChildDiv className='div2' text='Connect your wallet' text2='To start the Identity minting process,
                your wallet will have to be connected
                first to the system' img={Component1} img2={Group}/>
        </section>
    }
}

export default Universal