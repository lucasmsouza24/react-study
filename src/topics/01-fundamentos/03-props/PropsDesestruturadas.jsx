export default function PropsDesestruturadas() {

    function Person({name, age}) {
        return <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    }

    return <Person name="Lucas" age="23"/>

}
