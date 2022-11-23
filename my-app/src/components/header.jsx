import React from "react";
import menu from '../images/menu.svg'
import { useState } from 'react'

function Header() {
    const [bar, showMenu] = useState(false)
    
    const controlBar = () => {
        showMenu(!bar)
    }
    return <header>
        <h4>
            Identify
        </h4>
        <img src={menu} alt='menu' className='menu' onClick={controlBar}></img>
        <div style={{display: bar ? 'none' : 'flex' ? 'flex' : 'flex'}}>
            <nav className="nav_link">
                <a href="/app">Mint</a>
                <a href="/app">About us</a>
                <a href='/app'>White paper</a>
            </nav>
            <nav className="nav_btn">
                <button className="login">Login</button>
                <button className="getStarted">Get started</button>
            </nav>
        </div>
    </header>
}

export default Header