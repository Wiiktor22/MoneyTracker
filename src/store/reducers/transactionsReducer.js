const initialState = {
    transactions: [
        {id: 1, type: "expense", title: "H&M", category: "clothes", amount: '129,99'},
        {id: 2, type: "expense", title: "Lidl", category: "shopping", amount: '261,08'},
        {id: 3, type: "income", title: "February 2020", category: "salary", amount: '2500'}
    ]
}

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            console.log('income: ', action.transaction)
            break;
        case 'ADD_EXPENSE':
            console.log('expense: ', action.transaction)
            break;
        default: 
    }
    return state
}

export default transactionsReducer