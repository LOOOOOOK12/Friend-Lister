import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogOut } from 'lucide-react';
import * as UsersApi from '@/network/users_api';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleDialogClose = () => setIsOpen(false);

    async function logout() {
        try {
            await UsersApi.logout();
            console.log("Log out successful")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-others-secondary border-none hover:bg-[#582358]">
                    <LogOut />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[350px] flex flex-col items-center rounded-md">
                <DialogHeader>
                    <DialogTitle>Are you sure you want to Log-out</DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex flex-row items-center justify-center gap-2">
                    <Button className="bg-green-500 border-none hover:bg-green-600" onClick={logout}>Yes</Button>
                    <Button variant="destructive" onClick={handleDialogClose}>No</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Logout;