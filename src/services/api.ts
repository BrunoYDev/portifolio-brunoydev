import axios from "axios";

require('dotenv').config();


const api = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    },
    timeout: 2000
})

export default api