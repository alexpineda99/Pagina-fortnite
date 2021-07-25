export const logInUser = (userData) => {
    return (dispatch) => {
        dispatch({
            type: "logged",
            payload: userData
        })
    }
}

export const logOutUser = () => {
    return (dispatch) => {
        dispatch({
            type: "logout"
        })
    }
}