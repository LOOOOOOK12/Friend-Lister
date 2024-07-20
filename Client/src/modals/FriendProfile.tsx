import { Ellipsis } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';
import { Friends } from '../models/friends';

interface FriendProfileProps {
    friends: Friends;
    onDeleteFriend: (friendId: string) => void;
}

const FriendProfile: React.FC<FriendProfileProps> = ({ friends, onDeleteFriend }: FriendProfileProps) => {
    const handleDeleteFriendClicked = () => {
        onDeleteFriend(friends._id);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Ellipsis className='hover:bg-[#191d31] transition duration-150 rounded-md'/>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader className="flex gap-2">
                    <div className="flex gap-6 flex-row items-center">
                        {friends.picture && (
                            <img 
                                src={friends.picture} 
                                className="h-40 rounded-md" 
                                alt={friends.name} 
                            />
                        )}
                        <div className="flex flex-col gap-3">
                            <div className='flex gap-3'>
                                <h1>Name:</h1>
                                <h1>{friends.name}</h1>
                            </div>
                            <div className='flex gap-3'>
                                <h1>Age:</h1>
                                <h1>{friends.age}</h1>
                            </div>
                            <div className='flex gap-3'>
                                <h1>Gender:</h1>
                                <h1>{friends.gender}</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-left text-2xl font-semibold'>About your friend:</h1>
                    <DialogDescription className='text-xl text-left'>{friends.description}</DialogDescription>
                </DialogHeader>
                <DialogFooter className='flex flex-col gap-2'>
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
                    />
                    <DeleteFriend onDeleteFriendClicked={handleDeleteFriendClicked} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default FriendProfile;
