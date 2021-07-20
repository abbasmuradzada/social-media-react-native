import axios from "axios";

export default axios.create({
    // input you ip address
    baseURL: "http://192.168.0.106:5000/api",
});
