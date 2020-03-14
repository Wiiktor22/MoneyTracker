import React, { useState } from 'react';
import Navbar from '../Navbar';
import styles from './Profile.module.scss';
import { connect } from 'react-redux';
import CurrencyForm from './CurrencyForm/CurrencyForm';

const Profile = ({ info, email }) => {
    const [showForm, setShowForm] = useState(false);
    return ( 
        <div style={{ marginLeft: 240}}>
            <Navbar />
            <div className={styles.wrapper}>
                <p className={styles.hello}>Check information about your profile!</p>
                <div className={styles.info}>
                    <div>  
                        <ul>
                            <li>First name: <span>{info.firstName}</span></li>
                            <li>Last name: <span>{info.lastName}</span></li>
                            <li>e-mail: <span>{email}</span></li>
                            <li>Currency: <span>{info.currencies}</span></li>
                        </ul>
                        <button onClick={() => setShowForm(!showForm)}>Change currency</button>
                    </div>  
                    {showForm && <CurrencyForm />}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        info: state.firebase.profile,
        email: state.firebase.auth.email
    }
}

export default connect(mapStateToProps)(Profile);