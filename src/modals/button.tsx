import {Add} from '../types/types'

function button({buttonName}:Add) {
    return (
        <button>
            {buttonName}
        </button>
    )
}

export default button