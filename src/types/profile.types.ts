export interface IProfileResponse {
    id: string,
    avatar: {
        id: number,
        image_high_url: string,
        image_medium_url: string,
        image_low_url: string
    },
    name: string,
    is_active: boolean
    email: string,
    role: {
        value: number,
        label: string
    },
    last_login: Date,
    staff_role: {
        value: number,
        label: string
    }
}