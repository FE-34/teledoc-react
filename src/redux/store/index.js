import { combineReducers, createStore } from "redux";
import registerReducer from "../reducer/registerReducer";

const allReducer = combineReducers({
    register: registerReducer
})

const store = createStore(allReducer)

export default store