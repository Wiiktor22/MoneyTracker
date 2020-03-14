import React from 'react';
import { connect } from 'react-redux';
import styles from './../../TransactionsPanel.module.scss';

const Filter = ({ array, currency }) => {
    function compare(a, b) {
        const aDate = a.createdAt
        const bDate = b.createdAt
        let comprasion = 0;
        if (aDate < bDate) {
            comprasion = 1;
        } else {
            comprasion = -1;
        }
        return comprasion
    }
    const newArray = array.sort(compare);
    return (
        newArray.map(item => (
            <div key={item.date} className={item.type === 'income' ? `${styles.transaction} ${styles.income}` : `${styles.transaction} ${styles.expense}`}>
                <div>
                    <h6>{item.title}</h6>
                    <p>{item.categories}</p>
                    <p>{item.date}</p>
                </div>
                <p className={styles.cash}>{item.amount} {currency}</p>
            </div>
        ))
    );
}

const mapStateToProps = state => {
    return {
        currency: state.firebase.profile.currencies
    }
}

export default connect(mapStateToProps)(Filter);