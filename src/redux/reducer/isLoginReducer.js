const loggedin = {isLogin: false}

function isLoginReducer(state = loggedin, action){
    switch(action.type) {
        case 'LOGIN':
            state.isLogin = true
        default:
            return state
    }
}

export default isLoginReducer