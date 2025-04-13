export default function LearnOnClick() {
    const handleClick = () => {
        alert("Você clicou no botão!");
    };

    return <button onClick={handleClick}>Clique aqui</button>;
}
