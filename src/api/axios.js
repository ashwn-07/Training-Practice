import axios from "axios";

const BASE_URL= "https://dummyjson.com/";

export default axios.create({
    baseURL:BASE_URL
})