import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import logOutReducer from "./logOutReducer"

const reducers = combineReducers({
    User: logInReducer,
    LogOut: logOutReducer
});

export default reducers;