import { useEffect } from "react"

export default function LearnUseEffect() {
    useEffect(() => {
        console.log("Esse código roda toda vez que o componente renderiza.");
    });

    return <h1>Testando useEffect</h1>
}
