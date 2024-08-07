import Logout from '@/modals/Logout';
import AddFriend from '@/modals/AddFriend';
import { Friends } from '@/models/friends';
import { Input } from '@/components/ui/input';
import Friends2 from '@/assets/Friends2.png'

interface NavbarProps {
    onAddFriend: (newFriend: Friends) => void;
    onFindFriendChange: (searchTerm: string) => void;
}

function Navbar({ onAddFriend, onFindFriendChange }: NavbarProps) {

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFindFriendChange(event.target.value);
    };

    return (
        <nav className='bg-others-background w-full bg-opacity-90 backdrop-blur fixed top-0 z-20 flex justify-between items-center border-b-[.01rem] border-b-[#303051] px-5 py-2'>
            <a href='#Home'><img src={Friends2} alt="Friend Lister" className='h-full' /></a>
                <Input
                    placeholder='Search friend'
                    type='search'
                    onChange={handleSearchChange}
                    className='w-1/3'
                />
            <div className='flex gap-2'>
                <AddFriend onAddFriend={onAddFriend} />
                <Logout/>
            </div>
        </nav>
    );
}

export default Navbar;
