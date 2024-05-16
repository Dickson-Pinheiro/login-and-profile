import { jwtDecode } from "jwt-decode";

export default function useAuth() {

    function isAuthenticated() {
        const refreshToken = localStorage.getItem('refresh-token')
        if (!refreshToken) {
            return false
        }
        const payload = jwtDecode(refreshToken)
        return payload.exp as number * 1000 > Date.now()
    }

    function logout(){
        localStorage.removeItem('refresh-token')
        localStorage.removeItem('access-token')
        window.location.href = window.location.origin
    }

    return { isAuthenticated, logout }
}