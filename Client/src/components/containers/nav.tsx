import AddFriend from '@/modals/AddFriend'

function nav() {
    return (
        <nav className='bg-others-background w-full bg-opacity-90 backdrop-blur fixed top-0 z-20 flex justify-between items-center border-b-[.01rem] border-b-[#303051] px-11 py-3'>
            <a href='#Home'><h1 className='text-3xl font-semibold'>Fren</h1></a>
            <AddFriend/>
        </nav>
    )
}

export default nav