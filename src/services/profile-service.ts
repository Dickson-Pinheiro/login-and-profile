import { AxiosResponse } from "axios"
import axiosClient from "../axiosInstanse"
import { IProfileResponse } from "../types/profile.types"

export function profileService(){
    return {
        async getProfile(): Promise<AxiosResponse<IProfileResponse>>{
            return axiosClient.get('/auth/profile/')
        }
    }
}