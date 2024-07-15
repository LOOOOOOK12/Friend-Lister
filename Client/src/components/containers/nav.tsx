import AddFriend from '@/modals/AddFriend';
import { Friends } from '@/models/friends';

interface NavbarProps {
    onAddFriend: (newFriend: Friends) => void;
}

function Navbar({ onAddFriend }: NavbarProps) {
    return (
        <nav className='bg-others-background w-full bg-opacity-90 backdrop-blur fixed top-0 z-20 flex justify-between items-center border-b-[.01rem] border-b-[#303051] px-11 py-3'>
            <a href='#Home'><h1 className='text-4xl font-bold text-transparent bg-clip-text inline-block bg-gradient-to-r from-others-primary via-others-secondary to-others-accent'>Fren</h1></a>
            <AddFriend onAddFriend={onAddFriend} />
        </nav>
    );
}

export default Navbar;