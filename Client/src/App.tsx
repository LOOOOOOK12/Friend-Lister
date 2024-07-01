import './App.css'
import Navbar from './components/containers/nav'
import React, { useEffect, useState } from 'react'
import { Friends } from './models/friends'

function App() {
  const [friends, setFriends] = useState<Friends[]>([]);

  useEffect(() => {
    async function loadFriends(){
      try {
        const response = await fetch('/api/friends', { method: 'GET' });
        const friends = await response.json();
        setFriends(friends)
      } catch (error) {
        console.log(error)
        alert(error)
      }
    }
    loadFriends()
  },[]);

  return (
    <div className='bg-others-background' >
      {/* {JSON.stringify(friends)} */}
      <Navbar/>
      <main className='py-28 px-11 w-full h-full z-10 text-center flex flex-col gap-10 items-center justify-center relative overflow-hidden' id='Home'>
      <div className='absolute overflow-hidden -z-10 right-[2rem] top-0 size-72 bg-others-accent rounded-full blur-2xl opacity-[0.2]'></div>
        <div className='flex flex-col gap-5 items-center' >
          <h1 className='text-5xl font-semibold'>Friend Lister</h1>
          <h2 className='text-2xl text-others-accent'>Add your friends and see the details</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full h-full'>
        </div>
      </main>
    </div>
  )
}

export default App
