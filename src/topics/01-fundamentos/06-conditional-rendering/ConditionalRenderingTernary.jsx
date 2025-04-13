export default function ConditionalRenderingTernary() {
    function Item({itemName, isChecked}) {
        return <li>{itemName} {isChecked ? "✅" : ""}</li>
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
