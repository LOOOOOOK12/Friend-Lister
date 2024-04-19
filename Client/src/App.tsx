import './App.css'
import AddFriend from './modals/AddFriend'
import FriendContainer from './components/containers/friendContainer'

function App() {

  return (
    <div className='bg-gradient-to-r from-yellow-300 to-orange-500 py-8 flex flex-col gap-10 justify-center items-center '>
      <div className='flex flex-col gap-5 items-center'>
        <h1 className='text-5xl font-semibold'>Friend Lister</h1>
        <h2 className='text-2xl'>Add your friends and see the details</h2>
        <AddFriend/>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <FriendContainer/>
        <FriendContainer/>
        <FriendContainer/>
        <FriendContainer/>    
      </div>
    </div>
  )
}

export default App
