import { combineReducers, createStore } from "redux";
import registerReducer from "../reducer/registerReducer";
import loginReducer from "../reducer/loginReducer";

const allReducer = combineReducers({
    register: registerReducer,
    login: loginReducer
})

const store = createStore(allReducer)

export default store