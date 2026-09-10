import { useState } from "react";

// interface IProps {
//     text?: string;
//     age?: number;
//     backgroundColor?: string;
//     count: number;
//     setCount: () => void;
// }

let movies = ['ARON', "STARWARS", 'TERMINATOR', 'AVATAR', 'SPIDER MAN'];

export default function Banner({  backgroundColor, count, setCount }) {
    const [name, setName] = useState("");
    const [isTrue, setIsTrue] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        console.log(name)
    }

    return (
        <div style={{ width: 'screen', height: '100%', backgroundColor, color: 'white', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <form onSubmit={(e) => onSubmit(e)}>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit' name="Submit" >Sumbit</button>
            </form>
            <p onMouseEnter={(e) => setIsTrue((prev) => !prev)}>Working with state</p>
            <p>you have clicked the button {count} number of times.</p>
             {isTrue ? (
                <button
                    style={{ marginTop: '10px' }}
                    type="button"
                    className="counter"
                    onClick={() => setCount()}
                >
                    Count is {count}
                </button>
             ) : <p>THIS IS NOT TRUE</p>}

             {movies.map((value, index) => (
                <p key={index}>{value}</p>
             ))}
            
        </div>
    )
}