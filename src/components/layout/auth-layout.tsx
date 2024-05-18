import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AuthLayout() {
    const { isAuthenticated, logout } = useAuth()
    useEffect(() => {
        const isAuth = isAuthenticated()
        if (!isAuth) {
            logout()
        }
    }, [logout, isAuthenticated])
    return (
        <>
            <Outlet />
        </>
    )
}