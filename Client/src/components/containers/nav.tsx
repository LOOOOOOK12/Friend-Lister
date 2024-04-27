import AddFriend from '@/modals/AddFriend'

function nav() {
    return (
        <nav className='bg-transparent w-full fixed top-0 z-10 flex justify-between items-center border-b-[.01rem] border-b-[#424242] px-11 py-3'>
            <h1 className='text-3xl'>Fren</h1>
            <AddFriend/>
        </nav>
    )
}

export default nav