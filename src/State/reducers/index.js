import { combineReducers } from "redux";
import logInReducer from "./logInReducer";

const reducers = combineReducers({
    User: logInReducer
});

export default reducers;