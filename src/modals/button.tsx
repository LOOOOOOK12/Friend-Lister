import {Add} from '../types/types'

function button({buttonName, onclick}:Add) {
    return (
        <button onClick={onclick}>
            {buttonName}
        </button>
    )
}

export default button