import axiosInstance from "../axiosInstanse";
import { ILoginInfo, ILoginResponse } from "../types/auth.types";

export function authService(){
    return {
        async login(data: ILoginInfo): Promise<ILoginResponse> {
           return axiosInstance.post('/auth/login', data)
        },
    }
}