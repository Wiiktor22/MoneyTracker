const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login')
            return state;
        case 'LOGIN_ERROR':
            console.log('login fail')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'SINGOUT_SUCCESS':
            console.log('signout')
            return state;
        default:
            return state;
    }
}

export default authReducer