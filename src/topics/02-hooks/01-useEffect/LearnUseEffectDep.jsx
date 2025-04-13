import { useEffect, useState } from "react"

export default function LearnUseEffectDep() {
    const [textLength, setTextLength] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        setTextLength(text.length);
      }, [text]);

    return <section>
        <h1>Testando useEffect</h1>
        <textarea name="" id="" placeholder="Escreva aqui" onChange={(evt) => setText(evt.target.value)}></textarea>
        <p>Quantidade de characteres: {textLength}</p>
    </section>
}
