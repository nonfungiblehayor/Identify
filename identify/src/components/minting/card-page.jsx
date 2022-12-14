import React from "react";
import arrow from '../../images/arrow.svg'
import styles from './mint.module.scss'
import pfp from '../../images/ayo.jpg'
import union from '../../images/Union.svg'
import vector from '../../images/Vector.svg'
import { inputContext } from "./form-section";
import { useContext } from "react";
import { inputContext2 } from "./form-section";
import { inputContext3 } from "./form-section";
import { inputContext4 } from "./form-section";
import { inputContext5 } from "./form-section";
import {ethers} from 'ethers'
import contract from './contract/identifycontract.json'
import { useState } from "react";
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import { useRef } from "react";

function CardPreview(props) {

    const [mintState, setMintState] = useState()
    let hash;
    const domEl = useRef(null)

    const minted = () =>{
        setMintState(!mintState)
    }

    const download = () => {
        toPng(domEl.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
    }

    const amount = 1;

    //      0xde46e33a54b712ED4A4Bdcc449488BA70dF6228d
    //      0x5370A9143C194F06FFDe6D3A68b099F4882a5638
   
    const address = '0xde46e33a54b712ED4A4Bdcc449488BA70dF6228d'

    const abi = [
        'function mint(uint256 amtToken) external'
    ] 

    async function mint() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const identifyIns = new ethers.Contract(address, abi, signer)
        const txResponse = await identifyIns.mint(amount)
        const txReceipt = await txResponse.wait()
        console.log(txReceipt)
        hash = txReceipt.transactionHash;
        console.log(txReceipt.transactionHash)
        minted()
    }


    

    const walletAddr = useContext(inputContext)
    const firstName = useContext(inputContext2)
    const lastName = useContext(inputContext3)
    const userName = useContext(inputContext4)
    const image = useContext(inputContext5)
    return <section className={styles.cardSection}>
        <div className={styles.div3}>
        <img src={arrow} className={styles.arrImg} onClick={props.fnc3} alt='arrow back'></img>
        <h2 className={styles.details}>Verification completed</h2>
        <div className={styles.card} ref={domEl}>
            <p className={styles.address}>
            {walletAddr}
            </p>
            <nav className={styles.cardImgs}>
                <img src={union} className={styles.union} alt='union'></img>
                <img src={image} className={styles.pfp} alt='pfp'></img>
                <img src={vector} className={styles.vector} alt='vector'></img>
            </nav>
            <div className={styles.inCard}>
                <span className={styles.naming}>{firstName} {lastName}</span>
                <span className={styles.naming}>{userName}</span>
            </div>
        </div>
        {mintState ? <div className={styles.downloadSec}>
        <a className={styles.hashLink} href="https://mumbai.polygonscan.com">Here is your transaction {hash} check on polygon scan </a>
        </div>
        : 
        <>
        <button className={styles.preview} onClick={mint}> proceed to mint</button> 
        <button className={styles.preview} onClick={download}> Download </button>
        </>
        }
        </div>
    </section>
}

export default CardPreview