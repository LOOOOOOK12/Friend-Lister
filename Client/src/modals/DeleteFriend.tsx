import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

function DeleteFriend() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
                <DialogHeader>
                    <DialogTitle>Are you sure to delete your friend?</DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex items-center justify-center">
                    <Button type="submit">Yes</Button>
                    <Button>No</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteFriend