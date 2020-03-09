import React from 'react';
import styles from './Expense.module.scss';

const ExpenseForm = () => {
    return ( 
        <div className={styles.wrapper}>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" type="number"/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="categories">Categories</label>
                    <select id="categories">
                        <option value="Fun time">Fun time</option>
                        <option value="Option2">Option2</option>
                    </select>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}
    
export default ExpenseForm;