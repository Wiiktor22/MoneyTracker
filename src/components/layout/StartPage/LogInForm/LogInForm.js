import React, { useState } from 'react';
import styles from '../Form.module.scss';
import { connect } from 'react-redux';
import { signIn } from './../../../../store/actions/authActions';

const LogInForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = e => {
        switch (e.target.id) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                return
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.signIn({ email, password});
    }
    return ( 
        <>
            <form onSubmit={handleSubmit} className={styles.flexWrapper}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">e-mail address</label>
                    <input id="email" type="email" onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">password</label>
                    <input id="password" type="password" onChange={handleChange}/>
                </div>
                <button>Log in</button>
                {props.authError && <p className={styles.warning}> {props.authError} </p>}
            </form>
        </>
    );
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);