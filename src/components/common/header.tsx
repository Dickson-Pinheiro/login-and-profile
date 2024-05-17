import useAuth from "../../hooks/useAuth";
import CustomButton from "../ui/button";
import { SiGravatar } from "react-icons/si";

export default function Header() {
    const { logout } = useAuth()

    return (
        <header className="w-full h-[70px] bg-white flex justify-end items-center py-[13px] px-[34px]">
            <CustomButton className="h-11 max-w-14 md:max-w-[272px]" onClick={() => logout()}><p className="hidden md:block">Logout</p><SiGravatar className="text-white md:hidden"/></CustomButton>
        </header>
    )
}