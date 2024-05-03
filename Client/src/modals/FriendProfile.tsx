import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function FriendProfile() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-transparent border-[0.01rem]'>...</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add your Friend</DialogTitle>
                    <DialogDescription>Enter your details about your friend!!</DialogDescription>
                </DialogHeader>
            </DialogContent>
            <DialogFooter>

            </DialogFooter>
        </Dialog>
    )
}

export default FriendProfile