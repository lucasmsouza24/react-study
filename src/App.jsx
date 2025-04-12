import { useState } from "react"
import Watch from "./components/Watch"
import Ficha from "./components/Ficha";

function App() {
  const [actualTime, setActualTime] = useState(new Date());

  function updateTime() {
    setActualTime(new Date())
  }

  // const actualTime = new Date();

  return <>
    <div>
      <h1>Exemplos:</h1>

      <h2>Eventos:</h2>

      <h3>useState:</h3>
      <Watch time={actualTime.toLocaleString()} />

      <button onClick={updateTime}>Update time</button>

      <h3>onChange</h3>
      <Ficha />
    </div>
  </>
}

export default App
