import React from 'react';
import styles from './TransactionsPanel.module.scss';
import { connect } from 'react-redux';

const TransactionsPanel = props => {
    const items = props.transactions;
    return (
        <div className={styles.wrapper}>
            <h5>Transactions:</h5>
            {items && items.map(item => (
                <div key={item.id} className={item.type === 'income' ? `${styles.transaction} ${styles.income}` : `${styles.transaction} ${styles.expense}`}>
                    <div>
                        <h6>{item.title}</h6>
                        <p>{item.category}</p>
                    </div>
                    <p className={styles.cash}>{item.amount} PLN</p>
                </div>
            ))}
        </div>
    );
}

const mapStatetoProps = state => {
    return {
        transactions: state.transactions.transactions
    }
}
 
export default connect(mapStatetoProps)(TransactionsPanel);