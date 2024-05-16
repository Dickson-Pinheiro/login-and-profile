import { useUserProfile } from "../../hooks/useUserProfile";
import Card from "../ui/card";
import ReactImageFallback from "react-image-fallback";
import DisplayInfo from "../ui/display-info";

export default function ProfileInfo() {
    const { data } = useUserProfile()

    return (
        <Card className="shadow-user-card-shadow max-w-[356px] flex flex-col gap-[30px]">
            <div className="flex flex-col items-center justify-center gap-[9px]">
                <span className="text-black1">Profile picture</span>
                <ReactImageFallback
					src={data?.data?.avatar?.image_high_url as string}
					fallbackImage={[data?.data?.avatar?.image_medium_url as string, data?.data?.avatar?.image_low_url as string, 'https://doodleipsum.com/700/avatar-3?i=c26e52f624dad3aa4936a8d4dbddc174']}
					alt="profile picture image"
					className="max-w-[58px] w-full rounded-lg" />
            </div>
            <div className="flex flex-col gap-5">
                <DisplayInfo name="Name" content={data?.data?.name as string} />
                <DisplayInfo name="E-Mail" content={data?.data?.email as string} />
            </div>
        </Card>
    )
}