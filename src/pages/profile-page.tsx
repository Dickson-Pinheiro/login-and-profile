
import Header from "../components/common/header";
import ProfileInfo from "../components/profile/profile-info";

export default function ProfilePage() {

    return (
        <div className="w-full min-h-screen bg-blue1">
            <Header />
            <main className="flex justify-center mt-[10vh] text-">
                <ProfileInfo />
            </main>
        </div>
    )
}