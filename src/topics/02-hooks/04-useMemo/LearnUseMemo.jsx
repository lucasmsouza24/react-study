import { useState, useMemo } from "react";

export default function LearnUseMemo() {
    const [number, setNumber] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const double = useMemo(() => {
        console.log('Calculando...')
        return number * 2;
    }, [number])

    const themeStyle = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '8px'
    };

    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
            <div style={themeStyle}>
                <p>Resultado: {double}</p>
            </div>
        </div>
    );
}
