
const initialState = []

function loginReducer(state = initialState, action){
    switch(action.type) {
        case 'USER_LOGIN':
            return [...state, action.payload]
        default:
            return state
    }
}

export default loginReducer