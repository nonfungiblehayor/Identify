import React, { useState } from "react";
import Card from '../../images/Component1.svg'
import styles from './wallet.module.scss'
import mark from '../../images/Mark.svg'
import Web3 from 'web3'

let account;

export const addrContext = React.createContext(account)

function Wallet() {

    const [nxtText, showNxt] = useState(false)
    const [connected, connect0] = useState(false) 
    const [mint] = useState(false)
    const displayNxt = () => {
        showNxt(!nxtText)
    }

    const done = () => {
        connect0(!connected)
    }


    async function requestAccount()  {
        if(window.ethereum) {
            console.log(10)
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })  
               account = accounts[0];
               console.log(account)       
            }
            catch(error) {
                console.log('error')
            }
        } else {
            console.log(account)
        }
    }

    async function connectWallet() {
        if(typeof window.ethereum !== undefined) {
            await requestAccount()
            const provider = new Web3.providers.HttpProvider('window.ethereum')
            const web3 = new Web3(provider)
            done()
            console.log('connected')
        }
    }

    return  <addrContext.Provider value={account}>
         <section className={styles.walletSection}>
        <div className={styles.imgDiv}>
            <img src={Card} alt='card' className={styles.img}></img>
            <nav className={styles.Nav}>
                <h3 className={styles.h3}>{ nxtText ? 2 : 1} </h3>
                <p className={styles.p}>{ nxtText ? 'Verify your identity' : 'Connect your wallet'}</p>
                <span className={styles.span}> Connect your wallet </span>
            </nav>
        </div>
        {connected ? 
        <div className={styles.connectedDiv}>
        <img src={mark} className={styles.mark} alt='correct'></img>
        <h3 className={styles.h2}> Wallet conected</h3>
        <span className={styles.spin}>succsefully</span>
        <link to={{pathname: "/mintPage", data: account}}></link>
        <a href="/mintPage" className={styles.connected_Btn}>Done</a>

       </div> : <div className={styles.textDiv}>
            <h2 className={styles.h2}>{ nxtText ? 'Choose a wallet to connect' : 'Lets get started'}</h2>
            <button className={styles.connectBtn} onClick={ nxtText ? connectWallet : displayNxt}>{ nxtText ? 'Connect your wallet' : 'Proceed'}</button>
            <a href="/app" className={styles.howLink}>{nxtText ? '' : 'How can i create a wallet'}</a>
        </div>
        }
        </section>
    </addrContext.Provider> 
   
}

export default Wallet