import { useQuery } from "@tanstack/react-query";
import { profileService } from "../services/profile-service";

export function useUserProfile(){
    const { getProfile } = profileService()
    const query = useQuery({
        queryFn: getProfile,
        queryKey: ['profile-query']
    })

    return query
}