import { useState } from 'react'

function Home() {
    return (
        <div>
            <div>Home</div>
            <Contador/>
        </div>
    )
}

function Contador() {
    const [count, setCount] = useState(1);
    function add() {
        setCount(count + 1);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={add}>adicionar</button>
        </div>
    )
}

export default Home