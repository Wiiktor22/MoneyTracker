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
                authError: action.err.message
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer