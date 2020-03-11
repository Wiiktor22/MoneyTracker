import * as firebase from 'firebase';

export const addNewIncome = transaction => {
    return (dispatch, getState, {getFirebase , getFirestore}) => {
        const firestore = getFirestore();
        const transactionsRef = firestore.collection('users').doc(transaction.authorID);
        transactionsRef.update({
            transactions: firebase.firestore.FieldValue.arrayUnion(transaction),
            balance: parseFloat(transaction.totalBalance, 10) + parseFloat(transaction.amount, 10)
        }).then(() => {
            dispatch({
                type: 'ADD_INCOME',
                transaction
            })
        }).catch(err => {
            dispatch({
                type: 'ADD_INCOME_ERROR',
                err
            })
        })
    }
}

export const addNewExpense = transaction => {
    return (dispatch, getState, {getFirebase , getFirestore}) => {
        const firestore = getFirestore();
        const transactionsRef = firestore.collection('users').doc(transaction.authorID);
        transactionsRef.update({
            transactions: firebase.firestore.FieldValue.arrayUnion(transaction),
            balance: parseFloat(transaction.totalBalance, 10) - parseFloat(transaction.amount, 10)
        }).then(() => {
            dispatch({
                type: 'ADD_EXPENSE',
                transaction
            })
        }).catch(err => {
            dispatch({
                type: 'ADD_EXPENSE_ERROR',
                err
            })
        })
    }
}