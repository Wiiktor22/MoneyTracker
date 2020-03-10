export const addNewIncome = transaction => {
    return (dispatch, getState, {getFirebase , getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('transactions').add({
            ...transaction
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
        firestore.collection('transactions').add({
            ...transaction
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