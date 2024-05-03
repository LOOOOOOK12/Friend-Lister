import AddFriend from '@/modals/AddFriend'

function nav() {
    return (
        <nav className='bg-[#000910] w-full fixed top-0 z-10 flex justify-between items-center border-b-[.01rem] border-b-[#424242] px-11 py-3'>
            <a href='#Home'><h1 className='text-3xl font-semibold'>Fren</h1></a>
            <AddFriend/>
        </nav>
    )
}

export default nav