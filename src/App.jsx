import { useState } from "react"
import Watch from "./components/Watch"

function App() {
  const [actualTime, setActualTime] = useState(new Date());

  // const actualTime = new Date();

  return <>
    <article>
      <h1>Meu primeiro componente 2</h1>

      <ol>
        <li>Componentes: O Alicerce da UI</li>
        <li>Definindo um componente</li>
        <li>Usando um componente</li>
      </ol>

      <Watch time={actualTime.toLocaleString()} />

      <button onClick={() => setActualTime(new Date())}>Update</button>
    </article>
  </>
}

export default App
