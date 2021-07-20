import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext'
import authApi from '../services/auth'
import { navigate } from '../navigationRef'


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'login':
            return { ...state, token: action.payload, errorMessage: '' }
        case 'logout':
            return { ...state, token: null, errorMessage: '' }
        default:
            return state;
    }
}

const autoLogin = dispatch => async () => {
    const token = AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'login', payload: token })
        navigate('Home')
    } else {
        navigate('authFlow')
    }
}

const login = (dispatch) => async ({ email, password }) => {
    try {
        const response = await authApi.post("/auth/login", { email, password })
        await AsyncStorage.setItem('token', response.data.user.token)
        dispatch({ type: 'login', payload: response.data.user.token })
        navigate('Home')
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

const logout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'})
    navigate('authFlow')
}


export const { Context, Provider } = createDataContext(
    authReducer,
    { login, register, logout, autoLogin },
    { token: null, errorMessage: '' }
);