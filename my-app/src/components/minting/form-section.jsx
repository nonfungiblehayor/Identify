import React from "react";
import arrow from '../../images/arrow.svg'
import styles from './mint.module.scss'
import CardPreview from "./card-page";
import { useState } from "react";

export const inputContext = React.createContext()
export const inputContext2 = React.createContext()
export const inputContext3 = React.createContext()
export const inputContext4 = React.createContext()

function Form(props) {
    const [fnameVal, setFname] = useState('')
    const [firstnameVal, setFirstname] = useState('')
    const [lastnameVal, setLastname] = useState('')
    const [usernameVal, setUsername] = useState('')
    const [prev, showPrev] = useState(false)

    const handleChange = event => {
        setFname(event.target.value);
      };

    const handleChange2 = event => {
        setFirstname(event.target.value);
      };

    const handleChange3 = event => {
        setLastname(event.target.value);
      };

    const handleChange4 = event => {
        setUsername(event.target.value);
      };
    

    const showPreview = () => {
        showPrev(!prev)
    }

    const hidePreview = () => {
        showPrev(!prev)
    }

    return <inputContext.Provider value={fnameVal}>
        <inputContext2.Provider value={firstnameVal}>
        <inputContext3.Provider value={lastnameVal}>
        <inputContext4.Provider value={usernameVal}>
        <section className={styles.formSection}>
        {prev ? <CardPreview fnc3={hidePreview}/> : 
        <div className={styles.div2}>
            <img onClick={props.fnc2} src={arrow} className={styles.arrImg} alt='arrow back'></img>
            <h2 className={styles.details}>Input your details here</h2>
            <form className={styles.form}>
                <input onChange={handleChange2} value={firstnameVal} className={styles.input} type='text' id='Fname' placeholder='First name'></input>
                <input onChange={handleChange3} value={lastnameVal} className={styles.input} type='text' id='Lname' placeholder='Last name'></input>
                <input onChange={handleChange4} value={usernameVal} className={styles.input} type='text' id='name' placeholder='username.eth'></input>
                <input onChange={handleChange} value={fnameVal} className={styles.input} type='text' id='address' placeholder='wallet address'></input>
                <button className={styles.preview} onClick={showPreview}>preview</button>
            </form>
        </div> }
    </section>
    </inputContext4.Provider>
    </inputContext3.Provider>
    </inputContext2.Provider>
    </inputContext.Provider>
}

export default Form