import { Ellipsis } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';
import { Friends } from '../models/friends';

interface FriendProfileProps {
    friends: Friends;
    onDeleteFriend: (friendId: string) => void;
    onUpdateFriend: (updatedFriend: Friends) => void;
}

interface FriendLabelProps{
    name: string,
    desc: string
}

export function FriendLabel({ name, desc }:FriendLabelProps){
    return(
        <div className='flex gap-2'>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    );
}

const FriendProfile: React.FC<FriendProfileProps> = ({ friends, onDeleteFriend, onUpdateFriend }: FriendProfileProps) => {
    const handleDeleteFriendClicked = () => {
        onDeleteFriend(friends._id);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Ellipsis className='hover:bg-[#191d31] transition duration-150 rounded-md'/>
            </DialogTrigger>
            <DialogContent className="max-w-[300px] rounded-md">
                <DialogHeader className="flex flex-col items-center gap-2">
                    <div className='h-40'>
                        {friends.picture && (
                            <img 
                                src={friends.picture} 
                                className="h-full bg-contain rounded-full" 
                                alt={friends.name} 
                            />
                        )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <FriendLabel
                                name="Name:"
                                desc={friends.name} 
                            />
                            <FriendLabel
                                name="Age:"
                                desc={friends.age} 
                            />
                            <FriendLabel
                                name="Gender:"
                                desc={friends.gender} 
                            />
                        </div>
                    <div>
                        <h1 className='text-left'>About your friend:</h1>
                        <p>{friends.description}</p>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <EditFriend
                        friendId={friends._id}
                        initialFriendData={{
                            name: friends.name,
                            age: friends.age,
                            gender: friends.gender,
                            birthday: friends.birthday,
                            picture: friends.picture,
                            description: friends.description
                        }}
                        onUpdateFriend={onUpdateFriend}
                    />
                    <DeleteFriend onDeleteFriendClicked={handleDeleteFriendClicked} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default FriendProfile;
