import axios from 'axios'

const BASE_URL = 'http://10.5.10.138:3000/'

export const Signin = async (loginCredentials) => {
    console.log(BASE_URL)
    const headers = {
        accept: "application/json",
    };
    let request = {};
    request["emailAddress"] = `${loginCredentials && loginCredentials.email}`;
    request["password"] = `${loginCredentials && loginCredentials.password}`;
    let { data } = await axios.post(`${BASE_URL}public/login`, request, { headers })
    return data
};