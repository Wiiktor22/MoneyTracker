import React from 'react';
import styles from './TransactionsPanel.module.scss';

const TransactionsPanel = () => {
    return ( 
        <div className={styles.wrapper}>
            <h5>Transactions:</h5>
            <div className={`${styles.transaction} ${styles.income}`}>
                <div>
                    <h6>Example Income</h6>
                    <p>Category</p>
                </div>
                <p className={styles.cash}>1000 PLN</p>
            </div>
            <div className={`${styles.transaction} ${styles.expense}`}>
                <div>
                    <h6>Example Expense</h6>
                    <p>Category</p>
                </div>
                <p className={styles.cash}>1000 PLN</p>
            </div>
        </div>
    );
}
 
export default TransactionsPanel;