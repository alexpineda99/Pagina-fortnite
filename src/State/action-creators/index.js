export const logUser = (userData) => {
    return (dispatch) => {
        dispatch({
            type: "logged",
            payload: userData
        })
    }
}