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
    onUpdateFriend: (updatedFriend: Friends) => void;
}

const FriendContainer: React.FC<FriendContainerProps> = ({ friends, onDeleteFriend, onUpdateFriend }) => {
    return (
        <Card className="bg-others-container border border-[#303051] bg-opacity-75 backdrop-blur">
            <CardHeader className="items-end">
                <FriendProfile friends={friends} onDeleteFriend={onDeleteFriend} onUpdateFriend={onUpdateFriend} />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-2">
                <div className="w-full h-full rounded-md">
                    {friends.picture && (
                        <img src={friends.picture} alt={friends.name} className="bg-contain rounded-md" />
                    )}
                </div>
                <CardTitle className="text-3xl">{friends.name}</CardTitle>
            </CardContent>
        </Card>
    );
}

export default FriendContainer;
