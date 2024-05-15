import useAuth from "../../hooks/useAuth";
import CustomButton from "../ui/button";

export default function Header() {
    const { logout } = useAuth()

    return (
        <header className="w-full h-[70px] bg-white flex justify-end items-center py-[13px] px-[34px]">
            <CustomButton className="h-11 max-w-[272px]" onClick={() => logout()}>Logout</CustomButton>
        </header>
    )
}