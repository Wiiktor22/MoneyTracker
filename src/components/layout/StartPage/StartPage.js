import React, { useState } from 'react';
import styles from './StartPage.module.scss';
import logo from './../../../assets/FrontPage.svg';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const StartPage = ({ auth }) => {
    const [page, setPage] = useState(0);
    const handleClick = option => {
        if (page === option) {
            setPage(0)
        } else if (option === 1){
            setPage(1);
        } else {
            setPage(2);
        }
    }
    return ( 
        <div className={styles.wrapper}>
            {auth.uid && <Redirect to='/' />}
            <div className={styles.panel}>
                <hgroup>
                    <h1>Money</h1>
                    <h1>Tracker</h1>
                </hgroup>
                <p>Organize your personal budget.</p>
                <button
                    onClick={() => handleClick(1)}
                >Log In</button>
                <button
                    onClick={() => handleClick(2)}
                >Sing Up</button>
            </div>
            <div className={styles.form}>
                {page === 0 && <img src={logo} alt="Logo" />} 
                {page === 1 && <LogInForm />} 
                {page === 2 && <SignUpForm />} 
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}
 
export default connect(mapStateToProps)(StartPage);