import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/containers/nav';
import FriendContainer from './components/containers/friendContainer';
import { Friends } from './models/friends';
import * as FriendsApi from "./network/friends_api";
import * as UserApi from './network/users_api';
import { MoveUp } from 'lucide-react';
import { Users } from './models/users';

function App() {
    const [friends, setFriends] = useState<Friends[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searching, setSearching] = useState<boolean>(false);
    const [loggedInUser, setLoggedInUser] = useState<Users | null>(null);

    useEffect(() => {
        async function loadFriends() {
            try {
                const friends = await FriendsApi.fetchFriends();
                setFriends(friends);
            } catch (error) {
                alert('Error fetching friends');
            }
        }
        loadFriends();
    }, []);

    useEffect(() => {
        async function loadUser() {
            try {
                const user = await UserApi.getLoggedInUser();
                setLoggedInUser(user);
            } catch (error) {
                alert('Error fetching user');
            }
        }
        loadUser();
    }, []);

    const handleAddFriend = (newFriend: Friends) => {
        setFriends(prevFriends => [...prevFriends, newFriend]);
    };

    const handleUpdateFriend = (updatedFriend: Friends) => {
        setFriends(prevFriends => prevFriends.map(friend => friend._id === updatedFriend._id ? updatedFriend : friend));
    };

    const handleDeleteFriend = async (friendId: string) => {
        try {
            await FriendsApi.deleteFriend(friendId);
            setFriends(friends.filter(friend => friend._id !== friendId));
        } catch (error) {
            alert('Error deleting friend');
        }
    };

    const handleSearchFriends = async (searchTerm: string) => {
        setSearchTerm(searchTerm);
        setSearching(true);
        if (searchTerm && loggedInUser) {
            try {
                const foundFriends = await FriendsApi.findFriends(searchTerm, loggedInUser._id);
                setFriends(foundFriends);
            } catch (error) {
                alert('Friend cannot be found');
            }
        } else {
            try {
                const friends = await FriendsApi.fetchFriends();
                setFriends(friends);
            } catch (error) {
                alert('Error fetching friends');
            }
        }
        setSearching(false);
    };

    return (
        <div className="bg-others-background h-full">
            <main className="py-28 px-5 w-full h-full z-10 text-center flex flex-col gap-10 items-center justify-center relative overflow-hidden" id="Home">
                <Navbar onAddFriend={handleAddFriend} onFindFriendChange={handleSearchFriends} />
                <div className="absolute overflow-hidden -z-10 right-[2rem] top-0 size-72 bg-others-accent rounded-full blur-2xl opacity-[0.2]"></div>
                <div className="absolute overflow-hidden -z-10 left-[2rem] top-[7rem] size-72 bg-others-accent rounded-full blur-2xl opacity-[0.2]"></div>
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-6xl md:text-8xl text-transparent bg-clip-text font-bold inline-block bg-gradient-to-r from-others-primary via-others-secondary to-others-accent">Friend Lister</h1>
                    <h2 className="text-2xl text-others-text">Add your friends and see the details</h2>
                </div>
                {searching ? (
                    <h1 className="text-2xl text-others-text">Searching...</h1>
                ) : (
                    friends.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full h-full">
                            {friends.map((friend) => (
                                <FriendContainer key={friend._id} friends={friend} onDeleteFriend={handleDeleteFriend} onUpdateFriend={handleUpdateFriend} />
                            ))}
                        </div>
                    ) : (
                        <h1 className="text-2xl text-others-text">Friend not found</h1>
                    )
                )}
                <a href="#Home" className='fixed bottom-0 right-0 m-2 rounded-full border border-[#303051] p-2' ><MoveUp /></a>
            </main>
        </div>
    );
}

export default App;
