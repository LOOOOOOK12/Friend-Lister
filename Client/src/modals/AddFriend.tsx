import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Labels from '@/components/containers/labels';
import TextArea from '@/components/containers/textArea';

function AddFriend() {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(friend); 
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-transparent'>Add Friend</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add your Friend</DialogTitle>
                    <DialogDescription>Enter your details about your friend!!</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className='flex gap-3'>
                        <div className='flex flex-col gap-3'>
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
                        </div>
                        <TextArea
                            labelName='Describe your Friend'
                            placeholder="Etc"
                            onChange={(value) => handleChange('description', value)}
                            value={friend.description}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Add your Friend!</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddFriend;
