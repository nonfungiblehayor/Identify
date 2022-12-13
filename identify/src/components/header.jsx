import React from "react";
import menu from '../images/menu.svg'
import cancel from '../images/cancel.png'
import { useRef } from 'react'

function Header(props) {
    // const [display, showMenu] = useState(false)

    const divRef = useRef()
   

    const controlBar = () => {
        divRef.current.style.display = 'flex'
    }

    const closeBar = () => {
        divRef.current.style.display = 'none'
    }

   


    return <header>
        <h4>
            Identify
        </h4>
        <img src={menu} alt='menu' className='menu' onClick={controlBar}></img>
        
        <div ref={divRef}>
        <img src={cancel} alt='menu' onClick={closeBar}></img>
            <nav className="nav_link">
                <a href="/app">Mint</a>
                <a href="/app">About us</a>
                <a href='/app'>White paper</a>
            </nav>
            <nav className="nav_btn">
                <button className="login">Login</button>
                <button className="getStarted" onClick={props.control}>Get started</button>
            </nav>
        </div>
    </header>
}

export default Header