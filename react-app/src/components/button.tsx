import { useState } from "react"

export default function button () {

    const [getCount, setCount] = useState(1)

    function Minus () {
        if (getCount > 0) {
            setCount(getCount-1)
        }
        return
}

    function Add () {
    setCount(getCount+10)
    }

    return (
        <div>
        <button onClick={()=> Add()}>Addition</button>
        <p>{getCount}</p>
        <button onClick={()=> Minus()}>Subtraction</button>
        </div>
    )

}
