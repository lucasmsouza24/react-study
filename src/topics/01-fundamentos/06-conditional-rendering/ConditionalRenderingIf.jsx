export default function ConditionalRenderingIf() {
    function Item({itemName, isChecked}) {
        if (isChecked) {
            return <li>{itemName} ✅</li>
        }

        return <li>{itemName}</li>
    }

    return <section>
        <h1>Lista de compras</h1>
        <ul>
            <Item itemName={"Maçã"} isChecked={true}/>
            <Item itemName={"Banana"} isChecked={true}/>
            <Item itemName={"Arroz"} isChecked={false}/>
            <Item itemName={"Feijão"} isChecked={true}/>
            <Item itemName={"Azeite"} isChecked={false}/>
        </ul>
    </section>
}
