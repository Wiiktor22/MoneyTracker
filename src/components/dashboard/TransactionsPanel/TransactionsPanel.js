import React, { useState } from 'react';
import styles from './TransactionsPanel.module.scss';
import { connect } from 'react-redux';
import ShowTransactions from './ShowTransactions/ShowTransactions';

const TransactionsPanel = ({ isLoaded, isEmpty, info, currency }) => {
    const [options, setOptions] = useState(0);
    const handleClick = newOption => {
        if (options === newOption || newOption === 0) {
            setOptions(0)
        } else if (newOption === 1){
            setOptions(1);
        } else {
            setOptions(2);
        }
    }
    return (
        <div className={styles.wrapper}>
            <h5>Transactions:</h5>
            <div className={styles.buttonsWrapper}>
                <button onClick={() => handleClick(0)}>Default sort</button>
                <button onClick={() => handleClick(1)}>Sort by income</button>
                <button onClick={() => handleClick(2)}>Sort by expense</button>
            </div>
            {(isLoaded === true && isEmpty === false) && <ShowTransactions option={options}/>}
        </div>
    );
}

const mapStatetoProps = state => {
    return {
        isLoaded: state.firebase.profile.isLoaded,
        isEmpty: state.firebase.profile.isEmpty,
        info: state.firebase.profile.transactions,
        currency: state.firebase.profile.currencies
    }
}
 
export default connect(mapStatetoProps)(TransactionsPanel);