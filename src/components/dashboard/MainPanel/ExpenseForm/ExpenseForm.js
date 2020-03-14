import React, { useState } from 'react';
import styles from './Expense.module.scss';
import moment from 'moment';
import { connect } from 'react-redux';
import { addNewExpense } from './../../../../store/actions/transactionsActions';

const ExpenseForm = ({ addNewExpense, authorID, totalBalance, reset }) => {
    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState();

    const handleChange = e => {
        switch (e.target.id) {
            case 'amount':
                setAmount(e.target.value)
                break;
            case 'title':
                setTitle(e.target.value)
                break;
            case 'categories':
                setCategories(e.target.value)
                break;
            default:
                return
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        addNewExpense({
            amount,
            title,
            categories,
            type: 'expense',
            authorID,
            totalBalance,
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            createdAt: new Date()
        })
        setAmount(0);
        setTitle('');
        setCategories('');
        reset();
    }

    return ( 
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" type="number" min="0.00" step="0.01" onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="categories">Categories</label>
                    <select id="categories" onChange={handleChange} defaultValue={""}>
                        <option value="" disabled hidden>Select category</option>
                        <option value="Car & Transport">Car & Transport</option>
                        <option value="Fees/Bills">Fees/Bills</option>
                        <option value="Food & Drinks">Food & Drinks</option>
                        <option value="Home">Home</option>
                        <option value="Health & Hygiene">Health & Hygiene</option>
                        <option value="Entertaiment">Entertaiment</option>
                        <option value="Education">Education</option>
                        <option value="Personal">Personal</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Kids">Kids</option>
                        <option value="Flights/Travels">Flights/Travels</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authorID: state.firebase.auth.uid,
        totalBalance: state.firebase.profile.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewExpense: (transaction) => dispatch(addNewExpense(transaction))
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);