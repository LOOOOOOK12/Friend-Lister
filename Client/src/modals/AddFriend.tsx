import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Labels from '@/components/containers/labels';
import TextArea from '@/components/containers/textArea';
import { createFriend} from "@/network/friends_api";

interface AddfriendProps{
    onSubmit:() => void
}

function AddFriend() {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        gender:'',
        birthday: '',
        picture: '',
        description:'',
    });

    const handleChange = (key: string, value: string) => {
        setFriend(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
                await createFriend(friend); 
                console.log("Friend added successfully:", friend);
                window.location.reload();
        } catch (error) {
            console.error("Error adding friend:", error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-others-secondary border-none hover:bg-[#582358]'>Add Friend</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add your Friend</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className='flex flex-col gap-2'>
                            <Labels
                                labelName="Name"
                                type="text"
                                placeholder="Juan Dela Cruz"
                                value={friend.name}
                                onChange={(value) => handleChange('name', value)}
                            />
                            <Labels
                                labelName="Age"
                                type="text"
                                placeholder="12"
                                value={friend.age}
                                onChange={(value) => handleChange('age', value)}
                            />
                            <Labels
                                labelName="Gender"
                                type="text"
                                placeholder="12"
                                value={friend.gender}
                                onChange={(value) => handleChange('gender', value)}
                            />
                            <Labels
                                labelName="Birthday"
                                type="date"
                                placeholder="12"
                                value={friend.birthday}
                                onChange={(value) => handleChange('birthday', value)}
                            />
                            <TextArea
                                labelName='Describe your Friend'
                                placeholder="My friend is..."
                                onChange={(value) => handleChange('description', value)}
                                value={friend.description}
                            />
                            <Labels
                                labelName="Picture"
                                type="file"
                                value={friend.picture}
                                onChange={(value) => handleChange('picture', value)}
                            />
                    </div>
                    <DialogFooter>
                        <Button type="submit" className='w-full bg-others-primary border-none text-slate-950 hover:bg-[#7581c5]'>Add your Friend!</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddFriend;
