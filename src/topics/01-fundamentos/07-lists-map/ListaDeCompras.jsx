export default function ListaDeCompras() {

    const compras = [
        {id: 1, name: 'Arroz'},
        {id: 2, name: 'Feijão'},
        {id: 3, name: 'Macarrão'}
    ]

    function Item({name}) {
        return <li>{name}</li>
    }

    return <section>
        <h1>Lista de Compras</h1>
        <ul>
            {compras.map((item) => {
                return <Item key={item.id} name={item.name} />
            })}
        </ul>
    </section>
}
