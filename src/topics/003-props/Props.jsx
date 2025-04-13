export default function Props() {

    function Person(props) {
        return <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    }

    return <Person name="Lucas" age="23"/>

}
