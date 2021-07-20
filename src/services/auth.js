// import React, {useContext} from 'react'
import axios from "axios";

import AsyncStorage from '@react-native-async-storage/async-storage';

console.log(AsyncStorage.getItem('token'));
// console.log(Context);


export default axios.create({
    // input you ip address
    baseURL: "http://192.168.0.106:5000/api",
    // headers: { 'Authorization': 'Bearer ${token}' },
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY3MzVkMmY2NDdlYzFhYTQ4NmU5ZTAiLCJyb2xlIjoidXNlciIsImlhdCI6MTYyNjgxMzkwNywiZXhwIjoxNjI3Njc3OTA3fQ.i_L_a_7Z9_P7wtfB13KNshkwNvQIrG17TqgGTClJpyE' },
    // headers : {
        // 'Authorization': AsyncStorage.getItem('token')
    //} // for all requests

    // axios.interceptors.request.use((config) => {
    //     if (typeof window === "undefined") {
    //         return config;
    //     }
    //     const token = window.localStorage.getItem("userToken");
    //     if (token) {
    //         config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    // });
});
