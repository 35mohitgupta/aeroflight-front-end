const user={firstname,lastname};

export const loginUser = () => {
    return {
        type: "login",
        payload: 'user'
    }
}