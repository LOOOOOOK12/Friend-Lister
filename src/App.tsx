import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center'>
        <h1>Friend Lister</h1>
        <h2>Add your friends and see the details</h2>
        <Button>Add New Friend</Button>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

      </div>
    </div>
  )
}

export default App
