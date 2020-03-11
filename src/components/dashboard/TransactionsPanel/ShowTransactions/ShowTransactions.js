import React from 'react';
import styles from './../TransactionsPanel.module.scss';
import { connect } from 'react-redux';
import Filter from './Filter/Filter';

const ShowTransactions = ({ info, currency, option}) => {
    if (option === 0) {
        return ( 
            <div>
                {info.length ? <Filter array={info} /> : (
                    <>
                        <p className={styles.info}>You don't have any transactions!</p>
                        <p className={styles.info}>Add new transactions, using Main Panel in Dashboard.</p>
                    </>
                )}
            </div>
        );
    } else if (option === 1) {
        const incomesArray = info.filter(item => item.type === 'income')
        return (
            <div>
                {info.length ? <Filter array={incomesArray} /> : (
                    <>
                        <p className={styles.info}>You don't have any transactions!</p>
                        <p className={styles.info}>Add new transactions, using Main Panel in Dashboard.</p>
                    </>
                )}
            </div>
        )
    } else {
        const expensesArray = info.filter(item => item.type === 'expense')
        return (
            <div>
                {info.length ? <Filter array={expensesArray} /> : (
                    <>
                        <p className={styles.info}>You don't have any transactions!</p>
                        <p className={styles.info}>Add new transactions, using Main Panel in Dashboard.</p>
                    </>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.firebase.profile.transactions,
        currency: state.firebase.profile.currencies
    }
}

export default connect(mapStateToProps)(ShowTransactions);