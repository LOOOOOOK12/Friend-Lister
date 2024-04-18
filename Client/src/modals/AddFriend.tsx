import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Labels from "@/components/containers/labels"

function AddFriend() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Friend</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Add your Friend</DialogTitle>
                    <DialogDescription>
                        Enter your details about your friend!!
                    </DialogDescription>
                </DialogHeader>
                    <div className="flex flex-col gap-5">
                        <Labels
                            labelName="Name"
                            type="text"
                            defaultValue="Juan Dela Cruz"
                        />
                        <Labels
                            labelName="Age"
                            type="text"
                            defaultValue="12"
                        />
                        <Labels
                            labelName="Birthday"
                            type="date"
                            defaultValue="12"
                        />
                        <Labels
                            labelName="Picture"
                            type="file"
                        />
                    </div>
                <DialogFooter>
                    <Button type="submit">Add your Friend!</Button>
                </DialogFooter>
            </DialogContent>
    </Dialog>
    )
}

export default AddFriend