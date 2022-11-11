import React, { useRef } from 'react'
import Component1 from '../images/Component1.svg'
import menu from '../images/menu.png'
import cancel from '../images/cancel.png'

function Header() {
    const divRef = useRef()

    const showMenu = function() {
        divRef.current.style.display = 'flex'
     }
    const closeMenu = function() {
        divRef.current.style.display = 'none'
    }
        return <section>
            <header>
            <div className='first-header-div'>
                <p>Identify</p>
                <img src={menu} alt='menu-icon' onClick={showMenu}></img>
            </div>
            <div className='single-entity' ref={divRef}>
                <div className='first-header-div'>
                <img src={cancel} alt='cancel logo' onClick={closeMenu}></img>
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

export default Header;