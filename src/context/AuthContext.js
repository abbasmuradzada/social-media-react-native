import createDataContext from './createDataContext'
import authApi from '../services/auth'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const login = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await authApi.post("/auth/login", {email, password})
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
}

const register = (dispatch) => {
    return ({ username, password }) => {
        //test
        console.log(username);
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { login, register },
    { isSignedIn: false }
);