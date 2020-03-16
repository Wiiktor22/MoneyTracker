import React from 'react';
import styles from './Dashboard.module.scss';
import MainPanel from './MainPanel/MainPanel';
import TransactionsPanel from './TransactionsPanel/TransactionsPanel';
import { connect } from 'react-redux';
import ChartPanel from './ChartPanel/ChartPanel';

const Dashboard = ({ info, transactions }) => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.hello}>
                <h2>Hello <span>{info.firstName}</span></h2>
            </div>
            <div className={styles.mainPanel}>
                <MainPanel />
            </div>
            <div className={styles.chartPanel}>
                <ChartPanel transactions={transactions}/>
            </div>
            <div className={styles.transactionsPanel}>
                <TransactionsPanel />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        info: state.firebase.profile,
        transactions: state.firebase.profile.transactions
    }
}

export default connect(mapStateToProps)(Dashboard);