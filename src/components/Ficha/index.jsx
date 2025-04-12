import { useState } from "react";

export default function Ficha() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [technology, setTechnology] = useState(null);

    const handleSelectOnChange = (evt) => {
        setTechnology(evt.target.value)
    }

    return <>
        <div>
            <p>Ficha</p>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Tecnologia: {technology}</li>
            </ul>
        </div>

        <form>
            <div>
                <label>Nome:</label> <input placeholder='Nome' onChange={(evt) => setName(evt.target.value)}/>
            </div>

            <div>
                <label>Idade:</label> <input placeholder='Idade' onChange={(evt) => setAge(evt.target.value)}/>
            </div>

            <div>
                <label>Tecnologia:</label> 
                <select name="technologies" id="id_tech" onChange={handleSelectOnChange}>
                    <option value="">Selecione uma opção:</option>
                    <option value="Python" key="key_python">Python</option>
                    <option value="Javascript" key="key_javascript">Javascript</option>
                    <option value="Java" key="key_Java">Java</option>
                    <option value="PHP" key="key_PHP">PHP</option>
                </select>
            </div>
        </form>
    </>
}
