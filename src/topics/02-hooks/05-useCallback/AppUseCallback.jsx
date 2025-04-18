import { useState, useCallback } from "react";
import ListaFiltrada from "./ListaFiltrada";

const itens = [
  "Banana",
  "Maçã",
  "Laranja",
  "Abacaxi",
  "Uva",
  "Pêssego"
];

export default function AppUseCallback() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Função de filtro MEMORIZADA (só muda quando `search` muda)
  const filtrarItens = useCallback(() => {
    return itens.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h1>Busca de frutas</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={handleSearchChange}
      />
      <ListaFiltrada getItens={filtrarItens} />
    </div>
  );
}
