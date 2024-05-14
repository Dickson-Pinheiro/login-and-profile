import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth-service";

export function UseUserLogin(){
    const { login } = authService()
    const mutation = useMutation({
        mutationFn: login,
        mutationKey: ['login-mutation']
    })
    return mutation
}