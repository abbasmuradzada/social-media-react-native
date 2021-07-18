import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const login = (dispatch) => {
    return({username, password}) => {
        //test
    }
}

const register = (dispatch) => {
    return ({ username, password }) => {
        //test
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {login, register},
    { isSignedIn: false }
)