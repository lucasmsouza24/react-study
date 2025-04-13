import { useEffect, useState } from "react";

export default function LearnUseEffectInterval() {

    const [actualDate, setActualDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setActualDate(new Date())
        }, 1000);
    
    }, []);

    return <h1>Data atual: {actualDate.toLocaleString()}</h1>

}
