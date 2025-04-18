import { useState, useRef, useEffect } from "react";

export default function PreviousValueTracker() {
    const [count, setCount] = useState(0);
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    return (
        <div>
            <p>Valor atual: {count}</p>
            <p>Valor anterior: {prevCount.current}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}
