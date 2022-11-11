import React from 'react';
import Usecase from './usecase'
import FrameCoin from '../images/FrameCoin.svg'
import FrameCoinB from '../images/FrameCoinB.svg'
import FrameCoinW from '../images/FrameCoinW.svg'

function Faq() {
    return <section className='section3'>
        <div className='case-head'>
            <h2>Some use cases</h2>
        </div> 
        <div className='useCase-div'>
        <Usecase className='cName' images1={FrameCoin} text1='Ownership of an asset is secured by the Ethereum blockchain' />
         <Usecase className='cName' images1={FrameCoinW} text1='Ability to use for verificatiion on web3 ecosystems' />
        <Usecase className='cName' images1={FrameCoinB} text1='No one can modify the record of ownership' />
        </div>
    </section>
}

export default Faq;