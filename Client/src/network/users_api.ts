import { Users } from "@/models/users"
import { fetchData } from "./friends_api";

export async function getLoggedInUser():Promise<Users>{
    const response = await fetchData("/api/users", {method: "GET"})
    return response.json();
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string
}

export async function signUp(credentials: SignUpCredentials): Promise<Users>{
    const response = await fetchData("/api/users/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials), 
        });
        return response.json();
}

export interface LoginCredentials {
    username: string,
    password: string
}

export async function login(credentials: SignUpCredentials): Promise<Users>{
    const response = await fetchData("/api/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials), 
        });
        return response.json();
}