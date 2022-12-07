import React from "react";
import styles from './mint.module.scss'

function MintSection(props) {
    return <section className={styles.mint_section}>
        <div className={styles.div1}>
            <h2 className={styles.welcome}>Welcome  to Identify</h2>
            <span className={styles.sub_text}>Giving you the opportunity to minting your identity</span>
            <button type='submit' onClick={props.fnc} className={styles.verifyBtn}>Verify your identity</button>
        </div>
    </section>
}

export default MintSection