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
import { useState } from "react"
import TextArea from '@/components/containers/textArea';

function EditFriend() {

    const [editFriend, setEditFriend] = useState({
        name: '',
        age:'',
        birthday:'',
        picture:'',
        description:"",
    })

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
                    <form  className="flex flex-col gap-2">
                        <Labels
                            labelName="Name"
                            type="text"
                            placeholder="Juan Dela Cruz"
                            value={editFriend.name}
                        />
                        <Labels
                            labelName="Age"
                            type="text"
                            placeholder="12"
                            value={editFriend.age}
                        />
                        <Labels
                            labelName="Birthday"
                            type="date"
                            placeholder="12"
                            value={editFriend.birthday}
                        />
                        <Labels
                            labelName="Picture"
                            type="file"
                            value={editFriend.picture}
                        />
                        <TextArea
                            labelName='Describe your Friend'
                            placeholder="My friend is..."
                            onChange={(value) => handleChange('description', value)}
                            value={editFriend.description}
                        />
                        <DialogFooter>
                            <Button type="submit" className="bg-others-secondary border-none hover:bg-[#5a255a]">Save changes</Button>
                        </DialogFooter>
                    </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditFriend