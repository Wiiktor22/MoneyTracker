import React from 'react';
import styles from './Dashboard.module.scss';
import MainPanel from './MainPanel/MainPanel';
import TransactionsPanel from './TransactionsPanel/TransactionsPanel';

const Dashboard = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.hello}>
                <h2>Hello <span>Wiktor</span></h2>
            </div>
            <div className={styles.mainPanel}>
                <MainPanel />
            </div>
            <div className={styles.transactionsPanel}>
                <TransactionsPanel />
            </div>
        </div>
    );
}
 
export default Dashboard;