import { useUserProfile } from "../../hooks/useUserProfile";
import Card from "../ui/card";
import ReactImageFallback from "react-image-fallback";
import DisplayInfo from "../ui/display-info";
import profileImage from "../../assets/man.png"

export default function ProfileInfo() {
    const { data } = useUserProfile()

    return (
        <Card className="shadow-user-card-shadow max-w-[356px] flex flex-col gap-[30px]">
            <div className="flex flex-col items-center justify-center gap-[9px]">
                <span className="text-black1">Profile picture</span>
                <ReactImageFallback
					src={data?.data?.avatar?.image_high_url as string}
					fallbackImage={[data?.data?.avatar?.image_medium_url as string, data?.data?.avatar?.image_low_url as string, profileImage]}
					alt="profile picture image"
					className="max-w-[58px] w-full rounded-lg" />
            </div>
            <div className="flex flex-col gap-5">
                <DisplayInfo name="Name" content={`${data?.data?.name as string}${data?.data?.last_name ? ` ${data.data.last_name}` : ''}`} />
                <DisplayInfo name="E-Mail" content={data?.data?.email as string} />
            </div>
        </Card>
    )
}