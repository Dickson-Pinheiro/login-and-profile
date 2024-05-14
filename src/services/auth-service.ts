import { AxiosResponse } from "axios";
import axiosClient from "../axiosInstanse";
import { ILoginInfo, ILoginResponse } from "../types/auth.types";

export function authService(){
    return {
        async login(data: ILoginInfo): Promise<AxiosResponse<ILoginResponse>> {
           return axiosClient.post('/auth/login/', data)
        },
    }
}