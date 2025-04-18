import { useEffect, useRef } from "react";

export default function AutoFocusInput() {
    const inputRef = useRef('');

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return <input ref={inputRef} placeholder="Digite algo..."/>
}
