const initialState = {}

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            console.log('income: ', action.transaction)
            return state;
        case 'ADD_EXPENSE':
            console.log('expense: ', action.transaction)
            return state;
        case 'ADD_INCOME_ERROR':
            console.log(action.err)
            return state;
        case 'ADD_EXPENSE_ERROR':
            console.log(action.err)
            return state;
        case 'CHANGE_CURRENCY':
            console.log('sukces')
            return state;
        case 'CHANGE_CURRENCY_ERROR':
            console.log(action.err)
            return state;
        default:
            return state;
    }
}

export default transactionsReducer