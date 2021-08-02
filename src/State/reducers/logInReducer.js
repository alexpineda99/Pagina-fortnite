const reducerLogin = (state = "", action) => {

    switch(action.type){
        case "logged":
            return state + action.payload;
        case "logout":
            return state = "";
        default:
            return state 
    }

}

export default reducerLogin;
