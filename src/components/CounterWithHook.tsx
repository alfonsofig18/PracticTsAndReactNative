import { useCounter } from '../hooks/useCounter'

const CounterWidhHook = () => {
    const { counter, isLimited, increaseBy, decreaseBy } = useCounter({ initialValue: 5 });
    return (
        <>
            <h3>Contador: {counter}</h3>
            {isLimited === false ? <h4>No se puede</h4> : undefined}
            <div>
                <button onClick={() => decreaseBy(1)}>-1</button>
                &nbsp;
                <button onClick={() => increaseBy(1)}>+1</button>
            </div>
        </>
    )
}

export default CounterWidhHook;
