import { Ellipsis } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';
import JS from '@/assets/sampleimages/js.png'

function FriendProfile() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-transparent border-[0.01rem]'><Ellipsis/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className='flex items-center'>
                    <img src={JS} className='h-24 w-24 rounded-md' />
                    <DialogTitle className='text-3xl font-semibold'>Micahel Jackstone</DialogTitle>
                    <DialogDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas velit odio </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <EditFriend/>
                    <DeleteFriend/>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default FriendProfile