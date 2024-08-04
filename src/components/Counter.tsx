import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState<number>(10);
    const increaseBy = (value: number) => {
        setCounter(counter + value);
    }
    const decreaseBy = (value: number) => {
        setCounter(counter - value);
    }
    return (
        <>
            <h3>Contador: {counter}</h3>
            <div>
                <button onClick={() => decreaseBy(1)}>-1</button>
                &nbsp;
                <button onClick={() => increaseBy(1)}>+1</button>
            </div>
        </>
    )
}

export default Counter
