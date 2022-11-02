import React, { Component } from 'react'
import Component1 from '../images/Component1.svg'

class Header extends Component {
    render() {
        return <section>
            <header>
            <div className='first-header-div'>
                <p>Identify</p>
            </div>
            <div className='second-header-div'>
                <a href='../App.js'>Mint</a>
                <a href='../App.js'>About US</a>
                <a href='../App.js'>Whitepaper</a>
            </div>
            <div className='third-header-div'>
                <button>Login</button>
                <button>Get started</button>
            </div>
            </header>
            <div className='card-section'>
                <div className='card-section-1'>
                    <h4>
                        A Unique Identity As you choose
                    </h4>
                    <p>Get your unique NFT Identity here</p>
                    <button type='submit'>
                        Mint your Identity
                    </button>
                </div>
                <div className='card-section-2'>
                    <img src={Component1} alt='Nft card'></img>                    
                </div>
            </div>
        </section>
    }
}

export default Header;