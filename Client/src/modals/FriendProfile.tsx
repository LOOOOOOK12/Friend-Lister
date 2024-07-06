import { Ellipsis } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';
import { Friends } from '../models/friends';

interface FriendProfileProps {
    friends: Friends;
    OnDeleteFriendClicked: (friend: Friends) => void;
}

function FriendProfile({ friends }: FriendProfileProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Ellipsis />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader className="flex gap-2">
                    <div className="flex gap-6 flex-row">
                        <img src="src\assets\sampleimages\js.png" className="h-44 rounded-md" alt={friends.name} />
                        <div className="flex flex-col gap-3">
                            <div className='flex gap-3'><h1>Name:</h1><h1>{friends.name}</h1></div>
                            <div className='flex gap-3'><h1>Age:</h1><h1>{friends.age}</h1></div>
                            <div className='flex gap-3'><h1>Gender:</h1><h1>{friends.gender}</h1></div>
                        </div>
                    </div>
                    <h1 className='text-left text-3xl font-semibold'>About your friend:</h1>
                    <DialogDescription className='text-xl text-left'>{friends.description}</DialogDescription>
                </DialogHeader>
                <DialogFooter className='flex flex-col gap-2'>
                    <EditFriend/>
                    <DeleteFriend/>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default FriendProfile;
