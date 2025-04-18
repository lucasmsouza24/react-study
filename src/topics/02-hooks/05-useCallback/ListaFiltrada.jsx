import { useEffect, useState } from "react";
import React from "react";

function ListaFiltrada({ getItens }) {
  const [itensFiltrados, setItensFiltrados] = useState([]);

  useEffect(() => {
    const resultado = getItens();
    setItensFiltrados(resultado);
  }, [getItens]); // <- Se a função mudar, o efeito roda de novo

  console.log("Renderizou ListaFiltrada");

  return (
    <ul>
      {itensFiltrados.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default React.memo(ListaFiltrada);
