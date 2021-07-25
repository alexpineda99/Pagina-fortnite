const reducerLogout = (state = localStorage.getItem('user'), action) => {

    switch(action.type){
        case "logout":
            return state = localStorage.removeItem('user');
        default:
            return state
    }

}

export default reducerLogout;