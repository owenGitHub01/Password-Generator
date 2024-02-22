import Value from "./Value"
import Checkbox from "./Checkbox"
import Generate from "./Generate"

import { useState } from "react"

function Body(){
    const [value, setValue] = useState(12)

    const onChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    const onClick = ({Lowercase, Uppercase, Numbers, Symbols}) => {
        Generate({Lowercase, Uppercase, Numbers, Symbols}, value)
    }
    return(
        <div className="outline outline-2 rounded w-5/6 h-96 sm:w-4/6 sm:h-52">
            <div>
                <Value value={value} onChange={onChange}/>
            </div>
            <div>
                <Checkbox click={onClick}/>
            </div>
        </div>
    )
}

export default Body