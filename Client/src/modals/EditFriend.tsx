import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Labels from "@/components/containers/labels"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import TextArea from '@/components/containers/textArea';

interface EditFriendProps {
    friendData: {
        name: string;
        age: string;
        gender: string;
        birthday: string;
        picture: string;
        description: string;
    };
}

function EditFriend({ friendData }: EditFriendProps) {

    const [editFriend, setEditFriend] = useState({
        name: '',
        age: '',
        gender: '',
        birthday: '',
        picture: '',
        description: "",
    });

    useEffect(() => {
        setEditFriend(friendData);
    }, [friendData]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(editFriend);
    }

    const handleChange = (key: string, value: string) => {
        setEditFriend(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-others-secondary border-none hover:bg-[#511f51]">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit your friend's details</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <Labels
                        labelName="Name"
                        type="text"
                        placeholder="Juan Dela Cruz"
                        value={editFriend.name || ''}
                        onChange={(value) => handleChange('name', value)}
                    />
                    <Labels
                        labelName="Age"
                        type="text"
                        placeholder="12"
                        value={editFriend.age || ''}
                        onChange={(value) => handleChange('age', value)}
                    />
                    <Labels
                        labelName="Gender"
                        type="text"
                        placeholder="Gender"
                        value={editFriend.gender || ''}
                        onChange={(value) => handleChange('gender', value)}
                    />
                    <Labels
                        labelName="Birthday"
                        type="date"
                        placeholder="Birthday"
                        value={editFriend.birthday || ''}
                        onChange={(value) => handleChange('birthday', value)}
                    />
                    <TextArea
                        labelName='Describe your Friend'
                        placeholder="My friend is..."
                        value={editFriend.description || ''}
                        onChange={(value) => handleChange('description', value)}
                    />
                    <Labels
                        labelName="Picture"
                        type="file"
                        value={editFriend.picture || ''}
                        onChange={(value) => handleChange('picture', value)}
                    />
                    <DialogFooter>
                        <Button type="submit" className="bg-others-secondary border-none hover:bg-[#5a255a]">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default EditFriend;
