export interface ILoginInfo {
    email: string
    password: string
}

export interface ILoginResponse {
    user: {
        id: number,
        name: string,
        email: string,
        is_active: boolean,
        avatar: string | null,
        type: string,
        created: Date,
        mdified: Date,
        role: string,
    },
    tokens: {
        refresh: string,
        access: string
    }
}