import React from 'react';
import styles from './TransactionsPanel.module.scss';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const TransactionsPanel = ({ transactions }) => {
    return (
        <div className={styles.wrapper}>
            <h5>Transactions:</h5>
            {transactions && transactions.map(item => (
                <div key={item.id} className={item.type === 'income' ? `${styles.transaction} ${styles.income}` : `${styles.transaction} ${styles.expense}`}>
                    <div>
                        <h6>{item.title}</h6>
                        <p>{item.categories}</p>
                        <p>{item.date.seconds}</p>
                    </div>
                    <p className={styles.cash}>{item.amount} PLN</p>
                </div>
            ))}
        </div>
    );
}

const mapStatetoProps = state => {
    console.log(state)
    return {
        transactions: state.firestore.ordered.transactions
    }
}
 
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([{
        collection: 'transactions'
    }])
)(TransactionsPanel);