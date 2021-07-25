const reducerLogin = (state = "", action) => {

    switch(action.type){
        case "logged":
            return state + action.payload;
        default:
            return state 
    }

}

export default reducerLogin;
