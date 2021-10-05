import axios from 'axios';

export function login(login_data){
    return axios({
        method: "POST",
        url: "http://localhost:8393/users/signin",
        data: login_data,
    })
}

export function cadastro(user){
    return axios({
        method: "POST",
        url: "http://localhost:8393/users",
        data: user,
    })
}