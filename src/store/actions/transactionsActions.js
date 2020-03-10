export const addNewIncome = transaction => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_INCOME',
            transaction
        })
    }
}

export const addNewExpense = transaction => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_EXPENSE',
            transaction
        })
    }
}