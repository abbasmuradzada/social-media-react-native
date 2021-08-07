import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = "http://192.168.0.106:5000/api";
axios.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const globalService = {
    login(credentials) {
        return new Promise((resolve, reject) => {
            axios
                .post("/auth/login", {
                    email: credentials.email,
                    password: credentials.password,
                })
                .then((res) => {
                    if (res.data.user.token) {
                        resolve(res.data.user);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getAllPosts() {
        return new Promise((resolve, reject) => {
            axios
                .get("/post")
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    getOwnUser() {
        return new Promise((resolve, reject) => {
            axios
                .get("/user/ownProfile")
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
}

export default globalService