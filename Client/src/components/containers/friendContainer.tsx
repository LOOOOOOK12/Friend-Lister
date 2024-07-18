import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import FriendProfile from "@/modals/FriendProfile";
import { Friends } from '../../models/friends';

interface FriendContainerProps {
    friends: Friends;
    onDeleteFriend: (friendId: string) => void;
}

const FriendContainer: React.FC<FriendContainerProps> = ({ friends, onDeleteFriend }) => {
    return (
        <Card className="bg-others-container border border-[#303051] bg-opacity-75 backdrop-blur">
            <CardHeader className="items-end">
                <FriendProfile friends={friends} onDeleteFriend={onDeleteFriend} />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-4">
                {friends.picture && (
                    <img src={friends.picture} alt={friends.name} className="w-full h-72 rounded-md" />
                )}
                <CardTitle>{friends.name}</CardTitle>
            </CardContent>
        </Card>
    );
}

export default FriendContainer;
