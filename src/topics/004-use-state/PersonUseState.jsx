import { useState } from "react"

export default function PersonUseState() {

    const [name, setName] = useState('Lucas')
    const [age, setAge] = useState(23)

    return <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
}
