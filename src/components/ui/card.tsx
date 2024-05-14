import { ReactNode } from "react";
import { cn } from "../../utils/utils";

export default function Card({children, className}: {children: ReactNode, className?: string}){
    return(
        <div className={cn("max-w-[438px] w-full h-fit px-[26px] py-[40px] rounded-[18px] bg-white shadow-default-card-shadow", className)}>
            {children}
        </div>
    )
}