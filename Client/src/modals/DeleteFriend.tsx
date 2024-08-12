import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteProps {
    onDeleteFriendClicked: () => void;
}

const DeleteFriend: React.FC<DeleteProps> = ({ onDeleteFriendClicked }: DeleteProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDialogOpen = () => setIsOpen(true);
    const handleDialogClose = () => setIsOpen(false);

    const handleDeleteClick = () => {
        onDeleteFriendClicked();
        handleDialogClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-others-accent border-none hover:bg-[#995177]" onClick={handleDialogOpen}>
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[350px] flex flex-col items-center rounded-md">
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete your friend?</DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex flex-row items-center justify-center gap-2">
                    <Button className="bg-green-500 border-none hover:bg-green-600" onClick={handleDeleteClick}>Yes</Button>
                    <Button variant="destructive" onClick={handleDialogClose}>No</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteFriend;
