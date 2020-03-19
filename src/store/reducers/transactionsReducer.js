const initialState = {}

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return state;
        case 'ADD_EXPENSE':
            return state;
        case 'ADD_INCOME_ERROR':
            return state;
        case 'ADD_EXPENSE_ERROR':
            return state;
        case 'CHANGE_CURRENCY':
            return state;
        case 'CHANGE_CURRENCY_ERROR':
            return state;
        default:
            return state;
    }
}

export default transactionsReducer