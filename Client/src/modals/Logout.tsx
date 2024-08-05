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
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

function Logout() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-others-secondary border-none hover:bg-[#582358]" >
                    <LogOut/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
                <DialogHeader>
                    <DialogTitle>Are you sure you want to Log-out</DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex flex-row items-center justify-center gap-2">
                    <Link to="/Login"><Button className="bg-green-500 border-none hover:bg-green-600" >Yes</Button></Link>
                    <Button variant="destructive">No</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Logout