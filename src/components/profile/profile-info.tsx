import { useUserProfile } from "../../hooks/useUserProfile";
import Card from "../ui/card";
import DisplayInfo from "../ui/display-info";

export default function ProfileInfo() {
    const { data } = useUserProfile()
    console.log(data?.data)
    return (
        <Card className="shadow-user-card-shadow max-w-[356px] flex flex-col gap-[30px]">
            <div className="flex flex-col items-center justify-center gap-[9px]">
                <span className="text-black1">Profile picture</span>
                <img src={data?.data?.avatar?.image_low_url} className="max-w-[58px] w-full rounded-lg" />
            </div>
            <div className="flex flex-col gap-5">
                <DisplayInfo name="Name" content={data?.data?.name as string} />
                <DisplayInfo name="E-Mail" content={data?.data?.email as string} />
            </div>
        </Card>
    )
}