import React from 'react';
import styles from './TransactionsPanel.module.scss';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const TransactionsPanel = ({ isLoaded, isEmpty, info }) => {
    return (
        <div className={styles.wrapper}>
            <h5>Transactions:</h5>
            {(isLoaded === true && isEmpty === false) && (info.length ? (info.map(item => (
                <div key={item.id} className={item.type === 'income' ? `${styles.transaction} ${styles.income}` : `${styles.transaction} ${styles.expense}`}>
                    <div>
                        <h6>{item.title}</h6>
                        <p>{item.categories}</p>
                        <p>{item.date.seconds}</p>
                    </div>
                    <p className={styles.cash}>{item.amount} PLN</p>
                </div>
            ))) : (
                <>
                    <p className={styles.info}>You don't have any transactions!</p>
                    <p className={styles.info}>Add new transactions, using Main Panel in Dashboard.</p>
                </>
            ))}
        </div>
    );
}

const mapStatetoProps = state => {
    console.log(state.firebase.profile.transactions)
    return {
        isLoaded: state.firebase.profile.isLoaded,
        isEmpty: state.firebase.profile.isEmpty,
        info: state.firebase.profile.transactions
    }
}
 
export default connect(mapStatetoProps)(TransactionsPanel);