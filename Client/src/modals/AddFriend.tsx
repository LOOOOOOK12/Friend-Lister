import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Labels from '@/components/containers/labels';

function AddFriend() {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        birthday: '',
        picture: '',
    });

    const handleChange = (key: string, value: string) => {
        setFriend({
        ...friend,
        [key]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-indigo-800 hover:bg-violet-600'>Add Friend</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add your Friend</DialogTitle>
                    <DialogDescription>Enter your details about your friend!!</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
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
                        labelName="Birthday"
                        type="date"
                        placeholder="12"
                        value={friend.birthday}
                        onChange={(value) => handleChange('birthday', value)}
                    />
                    <Labels
                        labelName="Picture"
                        type="file"
                        value={friend.picture}
                        onChange={(value) => handleChange('picture', value)}
                    />
                    <DialogFooter>
                        <Button type="submit">Add your Friend!</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddFriend;
