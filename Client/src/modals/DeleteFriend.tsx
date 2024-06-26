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
                <Button className="bg-others-accent border-none hover:bg-[#995177]">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
                <DialogHeader>
                    <DialogTitle>Are you sure to delete your friend?</DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex items-center justify-center">
                    <Button type="submit" className="bg-green-500 border-none hover:bg-green-600">Yes</Button>
                    <Button variant="destructive">No</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteFriend