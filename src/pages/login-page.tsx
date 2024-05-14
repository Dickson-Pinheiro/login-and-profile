import { useEffect } from "react";
import LoginForm from "../components/login/login-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const isAuth = isAuthenticated()
        if(isAuth){
            navigate('/profile')
        }
    }, [])
    
    return(
        <div className="p-4 bg-white2 min-h-screen w-full flex justify-center">
            <LoginForm />
        </div>
    )
}