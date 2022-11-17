import axios from 'axios'

const Axios = axios.create({
    // normally should be in the env file but here for ease of setup 
    baseURL:  "https://www.anapioficeandfire.com/api",
    timeout: 10000,
    headers: {}
})

export default Axios