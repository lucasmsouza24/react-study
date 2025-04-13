import { useState } from 'react';

export default function LearnOnChange() {
    const [nome, setNome] = useState('');

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>Você digitou: {nome}</p>
        </div>
    );
}
