import React, { useState } from 'react';
import styles from '../Form.module.scss';
import { signUp } from './../../../../store/actions/authActions';
import { connect } from 'react-redux';

const SignUpForm = ({ signUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [currencies, setCurriences] = useState('');
    const handleChange = e => {
        switch (e.target.id) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'firstName':
                setFirstName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
                break;
            case 'currencies':
                setCurriences(e.target.value)
                break;
            default:
                return
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        signUp({
            email,
            password,
            firstName,
            lastName,
            currencies,
            balance: 0,
            transactions: []
        })
    }
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">first name</label>
                    <input id="firstName" type="text" onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">last name</label>
                    <input id="lastName" type="text" onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="currencies">currency</label>
                    <select id="currencies" onChange={handleChange} defaultValue={""}>
                        <option value="" disabled hidden>Select currency</option>
                        <option value="PLN">PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="CHF">CHF</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">e-mail address</label>
                    <input id="email" type="email" onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">password</label>
                    <input id="password" type="password" onChange={handleChange}/>
                </div>
                <button>Sign up</button>
            </form>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
 
export default connect(null, mapDispatchToProps)(SignUpForm);