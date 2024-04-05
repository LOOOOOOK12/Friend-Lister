import {Friends} from '../types/types'

function FriendContainer({image,name,gender}:Friends) {
    return (
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h1>{gender}</h1>
        </div>
    )
}

export default FriendContainer