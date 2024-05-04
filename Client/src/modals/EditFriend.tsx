import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Labels from "@/components/containers/labels"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function EditFriend() {

    const [editFriend, seteditFriend] = useState({
        name: '',
        age:'',
        birthday:'',
        picture:'',
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit your friend's details</DialogTitle>
                    <DialogDescription>
                        Enter your details about your friend!!
                    </DialogDescription>
                </DialogHeader>
                    <form  className="flex flex-col gap-5">
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
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditFriend