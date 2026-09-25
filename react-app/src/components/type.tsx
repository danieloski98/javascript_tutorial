import { useState } from "react"

export default function type () {

    const [getInput, setInput] = useState("")
    function typeIn (e:string) {
  setInput(e)
}
    return (
        <div>
             <input type="text" value={getInput} onChange={(e)=> typeIn(e.target.value)}/>
        </div>
    )

    
}

