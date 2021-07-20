import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext'
import authApi from '../services/auth'


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'login':
            return { ...state, token: action.payload, errorMessage: '' }
        default:
            return state;
    }
}

const login = (dispatch) => async ({ email, password }) => {
    try {
        const response = await authApi.post("/auth/login", { email, password })
        await AsyncStorage.setItem('token', response.data.user.token)
        dispatch({ type: 'login', payload: response.data.user.token })
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong in Login' })
        console.log(error);
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
    { token: null, errorMessage: '' }
);