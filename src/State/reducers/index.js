import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logInReducer from "./logInReducer";
import logOutReducer from "./logOutReducer"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["User"]
}

const reducers = combineReducers({
    User: logInReducer,
    LogOut: logOutReducer
});

export default persistReducer(persistConfig, reducers);