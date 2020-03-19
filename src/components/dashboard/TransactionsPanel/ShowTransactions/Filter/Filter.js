import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './../../TransactionsPanel.module.scss';
import { deleteItem } from '../../../../../store/actions/transactionsActions';

const Filter = ({ array, currency, deleteItem }) => {
    const [searchText, setSearchText] = useState('');
    const [showDeleteOption, setShowDeleteOption] = useState(false);

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
    const handleChange = e => {
        setSearchText(e.target.value);
    }
    const switchDelete = e => {
        e.preventDefault();
        setShowDeleteOption(!showDeleteOption);
    }
    const handleClick = data => {
        deleteItem(data);
        setShowDeleteOption(false);
    }

    const firstArray = array.sort(compare);
    const newArray = firstArray.filter(item => item.title.includes(searchText))
    return (
        <>
            <div className={styles.buttonsWrapper}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    onChange={handleChange}
                    placeholder="search by title"
                />
                <button onClick={switchDelete} style={{marginTop: '.5vh'}}>Delete transaction</button>
            </div>
            {newArray.map(item => (
                <div key={item.date} className={item.type === 'income' ? `${styles.transaction} ${styles.income}` : `${styles.transaction} ${styles.expense}`}>
                    <div>
                        <h6>{item.title}</h6>
                        <p>{item.categories}</p>
                        <p>{item.date}</p>
                    </div>
                    <p className={styles.cash}>{item.amount} {currency}</p>
                    {showDeleteOption && <img 
                        className={styles.deleteBtn} 
                        onClick={() => handleClick(item)}
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="Delete Icon"/>}
                </div>
            ))}
        </>
    );
}

const mapStateToProps = state => {
    return {
        currency: state.firebase.profile.currencies,
        authorID: state.firebase.auth.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (data) => dispatch(deleteItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);