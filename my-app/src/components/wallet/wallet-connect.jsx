import React, { useState } from "react";
import Card from '../../images/Component1.svg'
import styles from './wallet.module.scss'

function Wallet() {

    const [nxtText, showNxt] = useState(false)

    const displayNxt = () => {
        showNxt(!nxtText)
    }

    return <section className={styles.walletSection}>
        <div className={styles.imgDiv}>
            <img src={Card} alt='card' className={styles.img}></img>
            <nav className={styles.Nav}>
                <h3 className={styles.h3}>{ nxtText ? 2 : 1} </h3>
                <p className={styles.p}>{ nxtText ? 'Verify your identity' : 'Connect your wallet'}</p>
                <span className={styles.span}> Connect your wallet </span>
            </nav>
        </div>
        <div className={styles.textDiv}>
            <h2 className={styles.h2}>{ nxtText ? 'Choose a wallet to connect' : 'Lets get started'}</h2>
            <button className={styles.connectBtn} onClick={displayNxt}>{ nxtText ? 'Connect your wallet' : 'Proceed'}</button>
            <a href="/app" className={styles.howLink}>{nxtText ? '' : 'How can i create a wallet'}</a>
        </div>
    </section>
}

export default Wallet