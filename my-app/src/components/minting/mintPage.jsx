import React from "react";
import styles from './mint.module.scss'
import Header2 from "./header2";
import MintSection from "./mint-section";
import Form from "./form-section";
import { useState } from "react";
import Web3 from "web3";


function MintPage() {

    const [form, showForm] = useState(false)

    const displayForm = () => {
        showForm(!form)
    }

    const hideForm = () => {
        showForm(!form)
    }

    let currentAccount = null;
    let user;

    async function requestAccount()  {
        if(window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts',
                })      
                if (accounts.length === 0) {
                    const accounts = await window.ethereum.request({
                        method: 'eth_requestAccounts',
                    })
                    if(accounts.length !== 0) {
                        displayForm()
                    }
                  } else if (accounts[0] !== currentAccount) {
                    currentAccount = accounts[0];
                    displayForm()
                  }
            }
            catch(error) {
                console.log('error')
            }
        } else {
            console.log('yeeeeee egbami oooo')
        }
    }
    

    return <section className={styles.mintsection}>
        <Header2 />
        {form ? <Form fnc2={hideForm}/> : <MintSection fnc={requestAccount}/>}
    </section>
}

export default MintPage