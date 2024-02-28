import axios from "axios";

const axiosApi = axios.create({
    baseURL:"https://swapi.dev/api/",
    headers:{
        Accept:"application/json",
        'Content-Type':"application/json"
    }
})

export default axiosApi