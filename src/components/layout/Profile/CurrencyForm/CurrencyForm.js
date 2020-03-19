import React, { useState } from 'react';
import styles from './../Profile.module.scss';
import { connect } from 'react-redux';
import { changeCurrency } from './../../../../store/actions/transactionsActions';

const CurrencyForm = ({ currentCurrency, authorID, changeCurrency }) => {
    const [newCurrency, setNewCurrency] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const handleChange = e => {
        setNewCurrency(e.target.value);
        setShowWarning(false);
        if (e.target.value === currentCurrency) {
            setShowWarning(true);
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        changeCurrency({
            newCurrency,
            authorID
        })
        setShowSuccess(true);
        setNewCurrency('');
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
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
                <button className={styles.smallBtn}>Change</button>
                {showWarning && <p className={styles.warning}>You have already chosen {newCurrency}!</p>}
                {showSuccess && <p className={styles.success}>You have change your currency to {currentCurrency}</p>}
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentCurrency: state.firebase.profile.currencies,
        authorID: state.firebase.auth.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCurrency: (currency) => dispatch(changeCurrency(currency))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyForm);