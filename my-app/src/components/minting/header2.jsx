import React, { useContext } from "react";
import styles from './mint.module.scss'
import { useRef } from 'react'
import menu from '../../images/menu.svg'
import cancel from '../../images/cancel.png'
import { addrContext } from "../wallet/wallet-connect";

function Header2(props) {

    const divRef = useRef()

    const address = useContext(addrContext)
    console.log(address)
   

    const controlBar = () => {
        divRef.current.style.display = 'flex'
    }

    const closeBar = () => {
        divRef.current.style.display = 'none'
    }

    return <header className={styles.header2}>
        <h4 className={styles.h4}>
            Identify
        </h4>
        <img src={menu} alt='menu' className={styles.menu2} onClick={controlBar}></img>
        
        <div ref={divRef} className={styles.ref}>
        <img src={cancel} alt='menu' onClick={closeBar} className={styles.cancel}></img>
            <nav className={styles.nav_link}>
                <a href="/app">Mint</a>
                <a href="/app">About us</a>
                <a href='/app'>White paper</a>
            </nav>
            <nav className={styles.nav_btn}>
                <p className={styles.addr}>{address}</p>
            </nav>
        </div>
    </header>
}

export default Header2