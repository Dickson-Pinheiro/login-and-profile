import axiosClient from "../axiosInstanse"

export function profileService(){
    return {
        async getProfile(){
            return axiosClient.get('/auth/profile')
        }
    }
}