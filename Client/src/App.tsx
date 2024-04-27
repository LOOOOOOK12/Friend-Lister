import './App.css'
import FriendContainer from './components/containers/friendContainer'
import Navbar from './components/containers/nav'

function App() {

  return (
    <div className='bg-[#000910] h-full'>
      <Navbar/>
      <main className='py-28 px-11 w-full text-center flex flex-col gap-10 items-center justify-center'>
        <div className='flex flex-col gap-5 items-center'>
          <h1 className='text-5xl font-semibold'>Friend Lister</h1>
          <h2 className='text-2xl'>Add your friends and see the details</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          <FriendContainer/>
          <FriendContainer/>
          <FriendContainer/>
          <FriendContainer/>
        </div>
      </main>
    </div>
  )
}

export default App
