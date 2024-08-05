import Logout from '@/modals/Logout';
import AddFriend from '@/modals/AddFriend';
import { Friends } from '@/models/friends';
import { Input } from '@/components/ui/input';

interface NavbarProps {
    onAddFriend: (newFriend: Friends) => void;
    onFindFriendChange: (searchTerm: string) => void;
}

function Navbar({ onAddFriend, onFindFriendChange }: NavbarProps) {

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFindFriendChange(event.target.value);
    };

    return (
        <nav className='bg-others-background w-full bg-opacity-90 backdrop-blur fixed top-0 z-20 flex justify-between items-center border-b-[.01rem] border-b-[#303051] px-5 py-3'>
            <a href='#Home'><h1 className='text-4xl font-bold text-transparent bg-clip-text inline-block bg-gradient-to-r from-others-primary via-others-secondary to-others-accent'>Fren</h1></a>
                <Input
                    placeholder='Search friend'
                    type='search'
                    onChange={handleSearchChange}
                    className='w-1/3'
                />
            <div className='flex gap-3'>
                <AddFriend onAddFriend={onAddFriend} />
                <Logout/>
            </div>
        </nav>
    );
}

export default Navbar;
