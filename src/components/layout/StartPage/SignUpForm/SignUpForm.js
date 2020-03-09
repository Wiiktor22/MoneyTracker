import React from 'react';
import styles from '../Form.module.scss';

const SignUpForm = () => {
    return ( 
        <>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">first name</label>
                    <input id="firstName" type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">last name</label>
                    <input id="lastName" type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="currencies">currency</label>
                    <select id="currencies">
                        <option value="pln">PLN</option>
                        <option value="eur">EUR</option>
                        <option value="usd">USD</option>
                        <option value="gbp">GBP</option>
                        <option value="chf">CHF</option>
                        <option value="jpy">JPY</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">e-mail address</label>
                    <input id="email" type="email"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">password</label>
                    <input id="password" type="password"/>
                </div>
            </form>
            <button>Sign up</button>
        </>
    );
}
 
export default SignUpForm;