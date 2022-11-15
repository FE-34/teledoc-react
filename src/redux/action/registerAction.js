export const USER_REGISTER = 'USER_REGISTER'

export function addUser(dataUser){
    return{
        type: USER_REGISTER,
        payload: dataUser
    }
}