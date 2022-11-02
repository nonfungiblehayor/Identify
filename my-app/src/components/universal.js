import React, { Component } from 'react';
import ChildDiv from './universalChild.js'
import Component1 from '../images/Component1.svg'



class Universal extends Component {
    render() {
        const sectionClass = this.props.sec ? 'section2' : ""
        return <section className={sectionClass}>
            <div className='div1'>
                <p>
                Identity NFT is a system that helps Identity 
                NFT is a system that helpsIdentity NFT is a system that helpsIdentity 
                NFT is a system that helpsIdentity NFT is a system that helps Identity NFT is a system 
                that helpsIdentity NFT is a system that helpsIdentity NFT is a system that helps
                </p>
            </div>
            <ChildDiv className='div2' pfp={Component1} text='Identity Token is a system that helps Identity Token is a system that helpsIdentity Token is a system that helps Identity Token is a system that helps Identity Token is a system that helps Identity NFT is a system that helpsIdentity NFT is a system that helpsIdentity'/>
            <ChildDiv className='div3' pfp={Component1} text='Identity Token is a system that helps Identity Token is a system that helpsIdentity Token is a system that helps Identity Token is a system that helps Identity Token is a system that helps Identity NFT is a system that helpsIdentity NFT is a system that helpsIdentity'/>
            <ChildDiv className='div2' pfp={Component1} text='Identity Token is a system that helps Identity Token is a system that helpsIdentity Token is a system that helps Identity Token is a system that helps Identity Token is a system that helps Identity NFT is a system that helpsIdentity NFT is a system that helpsIdentity'/>
            
        </section>
    }
}

export default Universal