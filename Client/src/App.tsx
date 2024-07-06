import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/containers/nav';
import FriendContainer from './components/containers/friendContainer';
import { Friends } from './models/friends';
import * as FriendsApi from "./network/friends_api";

function App() {
    const [friends, setFriends] = useState<Friends[]>([]);

    useEffect(() => {
        async function loadFriends() {
            try {
                const friends = await FriendsApi.fetchFriends();
                setFriends(friends);
            } catch (error) {
                console.error('Error fetching friends:', error);
                alert('Error fetching friends');
            }
        }
        loadFriends();
    }, []);

    return (
        <div className="bg-others-background">
            <Navbar />
            <main className="py-28 px-11 w-full h-full z-10 text-center flex flex-col gap-10 items-center justify-center relative overflow-hidden" id="Home">
                <div className="absolute overflow-hidden -z-10 right-[2rem] top-0 size-72 bg-others-accent rounded-full blur-2xl opacity-[0.2]"></div>
                <div className="absolute overflow-hidden -z-10 left-[2rem] top-[7rem] size-72 bg-others-accent rounded-full blur-2xl opacity-[0.2]"></div>
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-6xl md:text-8xl text-transparent bg-clip-text font-bold inline-block bg-gradient-to-r from-others-primary via-others-secondary to-others-accent">Friend Lister</h1>
                    <h2 className="text-2xl text-others-text">Add your friends and see the details</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full h-full">
                    {friends.map((friend) => (
                        <FriendContainer key={friend._id} friends={friend} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
