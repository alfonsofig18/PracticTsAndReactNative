import { useState } from "react";

interface Options {
    initialValue?: number;
}

export const useCounter = ({ initialValue = 0 }: Options) => {
    const [isLimited, setIsLimited] = useState(false)
    const [counter, setCounter] = useState<number>(initialValue);
    const increaseBy = (value: number) => {
        setCounter(counter + value);
    }
    const decreaseBy = (value: number) => {
        if (counter > 0) {
            setCounter(counter - value);
            setIsLimited(true);
        }
    }
    return {
        // Properties
        counter,
        isLimited,

        // Methods
        increaseBy,
        decreaseBy
    }
}
