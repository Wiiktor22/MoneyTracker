import React, { useState } from 'react';
import styles from './MainPanel.module.scss';
import IncomeForm from './IncomeForm/IncomeForm';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import { connect } from 'react-redux';

const MainPanel = ({ info, isEmpty, isLoaded }) => {
    const [showMenu, setShowMenu] = useState(0);
    const handleClick = option => {
        if (showMenu === option) {
            setShowMenu(0)
        } else if (option === 1){
            setShowMenu(1);
        } else {
            setShowMenu(2);
        }
    }
    const reset = () => {
        setShowMenu(0);
    }
    let balance = null;
    if (isLoaded === true && isEmpty === false) {
        balance = info.balance.toFixed(2)
    }
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                <p className={styles.text}>Available balance: </p>
                <p className={styles.cash}>{balance} {info.currencies}</p>
                <button 
                    onClick={() => handleClick(1)}
                    className={styles.incomeBtn}
                    >
                    Add income
                </button>
                <button 
                    onClick={() => handleClick(2)} 
                    className={styles.expenseBtn}
                    >
                    Add expense
                </button>
            </div>
            <div className={styles.form}>
                {showMenu === 1 && <IncomeForm reset={reset} />}
                {showMenu === 2 && <ExpenseForm reset={reset} />}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        info: state.firebase.profile,
        isEmpty: state.firebase.profile.isEmpty,
        isLoaded: state.firebase.profile.isLoaded
    }
}
 
export default connect(mapStateToProps)(MainPanel);