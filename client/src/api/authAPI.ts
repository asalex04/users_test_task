import jwtDecode from "jwt-decode";
import {$host} from "./index";

export const registration = async (email: string, password: string, name: string) => {
    const {data} = await $host.post('/api/user/register', {email, password, name})
    localStorage.setItem('token', data)
    return jwtDecode(data)
}

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('/api/user/login', {email, password})
    localStorage.setItem('token', data)
    return jwtDecode(data)
}

