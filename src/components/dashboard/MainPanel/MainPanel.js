import React, { useState } from 'react';
import styles from './MainPanel.module.scss';
import IncomeForm from './IncomeForm/IncomeForm';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const MainPanel = () => {
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
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                <p className={styles.text}>Available balance: </p>
                <p className={styles.cash}>15000 PLN</p>
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
                {showMenu === 1 && <IncomeForm />}
                {showMenu === 2 && <ExpenseForm />}
            </div>
        </div>
    );
}
 
export default MainPanel;