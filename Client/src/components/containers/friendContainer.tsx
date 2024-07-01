import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import FriendProfile from "@/modals/FriendProfile"
import { Friends } from '../../models/friends';

interface FriendsProps {
    friends: Friends,
}

function friendContainer({ friends }: FriendsProps) {
    return (
        <Card className="bg-others-container border border-[#303051] bg-opacity-75 backdrop-blur">
            <CardHeader className="items-end">
                <FriendProfile friends={friends}/>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-4">
                <img src="src\assets\sampleimages\js.png" alt="test" className=" w-full rounded-md" />
                <CardTitle>{friends.name}</CardTitle>
            </CardContent>
        </Card>
    )
}

export default friendContainer