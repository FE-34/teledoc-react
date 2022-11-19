import { USER_REGISTER } from "../action/registerAction"

const initialState = [
    {
        namaDepan: 'John',
        namaBelakang: 'Cena',
        email: 'johncena@gmail.com',
        password: 'thechampishere',
        telepon: '',
        jk: '',
        tempatLahir: '',
        tanggalLahir: '',
        alamat: ''
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