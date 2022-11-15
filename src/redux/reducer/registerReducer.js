import { USER_REGISTER } from "../action/registerAction"

const initialState = [
    {
        namadepan: 'John',
        namabelakang: 'Cena',
        email: 'johncena@gmail.com',
        password: 'thechampishere'
    }
]

function registerReducer(state = initialState, action){
    switch (action.type) {
        case USER_REGISTER:
            return [...state, action.payload]
        default:
            return state
    }
}

export default registerReducer