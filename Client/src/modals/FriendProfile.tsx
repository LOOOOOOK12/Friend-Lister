import { Ellipsis } from 'lucide-react';
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from '@/components/ui/dialog';
import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';
import JS from '@/assets/sampleimages/js.png'

function FriendProfile() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Ellipsis/>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className='flex gap-5'>
                    <div className='flex gap-6'>
                        <img src={JS} className='h-32 w-44 rounded-md' />
                        <div className='flex flex-col gap-3'>
                            <h1>Gender: Bading</h1>
                            <h1>Age: 21</h1>
                            <h1>Birthday: Febuary 29, 2014</h1>
                        </div>
                    </div>
                    <DialogTitle className='text-3xl font-semibold'>Micahel Jackstone</DialogTitle>
                    <DialogDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas velit odio Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas velit odio </DialogDescription>
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