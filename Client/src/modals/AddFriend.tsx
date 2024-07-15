import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Labels from '@/components/containers/labels';
import TextArea from '@/components/containers/textArea';
import { createFriend } from "@/network/friends_api";
import { Friends } from "@/models/friends"; 

interface AddFriendProps {
    onAddFriend: (newFriend: Friends) => void;
}

function AddFriend({ onAddFriend }: AddFriendProps) {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        gender: '',
        birthday: '',
        picture: '',
        description: '',
    });
    const [file, setFile] = useState<File | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (key: string, value: string) => {
        setFriend(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            handleChange('picture', event.target.files[0].name);
        }
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(friend).forEach(key => {
            formData.append(key, (friend as any)[key]);
        });
        if (file) {
            formData.append('picture', file);
        }
        try {
            const newFriend = await createFriend(formData);
            console.log("Friend added successfully:", newFriend);
            onAddFriend(newFriend);
            setIsOpen(false);
        } catch (error) {
            console.error("Error adding friend:", error);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className='bg-others-secondary border-none hover:bg-[#582358]' onClick={() => setIsOpen(true)}>Add Friend</Button>
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
                            placeholder="Male/Female"
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
                            onFileChange={handleFileChange}
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
