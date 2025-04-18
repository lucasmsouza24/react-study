# React Study

🧪 Repositório com anotações e exemplos práticos dos meus estudos com React.js

Aqui planejo descrever, exemplificar e documentar os conceitos estudados.

## O que é React.js?

O React.js é uma biblioteca do JavaScript criada e mantida pelo Facebook para construir interfaces de usuário (UI) de forma rápida, reativa e reutilizável.

## Fundamentos do React.

### Criando um template de aplicação ReactJS.

Para criar o template dessa aplicação, foi utilizada um biblioteca chamada `vite`. Que permite justamente criar ambientes de desenvolvimento como ReactJS, Vue, JS Vanilla, Solid, etc.

Para mais detalhes verifique a [Documentação do Vite](https://vite.dev/guide/).

> No momento em que esse `README.md` está sendo escrito, a documentação do Vite recomenda a utilização do Node v18 ou superior.

Comando para a criação do template:

~~~shell
npm create vite@latest
~~~

Para esse repositório as opções escolhidas foram:

- Nome do projeto: react-study
- Framework: `React`
- Variante: `Javascript`

Após seguir o roteiro da criação do projeto, é necessário instalar as dependencias do React:

~~~shell
npm install
~~~

### O que é JSX?

o `JSX` é um tipo de arquivo que possui uma sintaxe semelhante à do `html`, porém é utilizado dentro do JavaScript. Facilitando a construção das interfaces. 

De forma resumida, o `JSX` é uma forma de "misturar" `html` e `JavaScript`, facilitando a interação entre ambos. É possível, por exemplo, utilizar variáveis dentro de tags html:

~~~jsx
// index.jsx
const nome = "Lucas";
return <h1>Olá, {nome}!</h1>;
~~~

### Componentes

Um componente nada mais é do que uma função (ou classe) que retorna parte da interface.

Como os componentes são declarados a partir de funções (ou classes), eles podem (e em muitos casos devem) possuir partes lógicas que ditam como o componente deve se comportar.

#### Funcionais

A forma mais moderna e recomendada de declarar componentes react é a partir de funções:

~~~jsx
export default function FunctionComponent() {
    return <p>Function Component</p>
}
~~~

> É importante enfatizar que para que o componente seja capaz de ser reutilizado em outro arquivo ele precisa ser exportado, nesse exemplo está sendo exportado a partir do comando `export default` antes da declaração da função.

Também é possível declarar componentes funcionais utilizando `arrow functions`:

~~~jsx
const ArrowFunctionComponent = () => {
    return <p>(arrow)Function Component</p>;
}

export default ArrowFunctionComponent
~~~

> Note que a forma de exportar o componente varia de acordo com a forma em que o mesmo é declarado.


### Props

As `props` permitem que dados sejam passados entre componentes.

No exemplo a seguir, o componente `Person` está declarado e está recebendo as propriedades `name` e `age`: 

~~~jsx
function Person(props) {
    return <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
}
~~~

Um componente pai que realizar a chamada do componente Person precisa passar os valores da props, isso pode ser realizado da seguinte forma:

~~~jsx
<Person name="Lucas" age="23"/>
~~~

#### Props desestruturadas

Uma forma um pouco mais simples visualmente de declarar as props é a partir da desestruturação:

~~~jsx
function Person({name, age}) {
    return <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
}
~~~

### State

Como o nome sugere, `State` é um objeto que representa dados mutáveis dentro de um componente. De forma direta, `State` é onde você armazena informações que podem mudar com o tempo.

> Quando o `State` muda, o componente é **re-renderizado**

No react, os States são gerenciados por um Hook (método) chamado `useState`.

Ao chamar o método `useState`, um parametro opcional pode ser passado, o valor desse parâmetro representa o _estado_ inicial:

O método useState retorna uma lista com 2 items:
- Estado atual.
- Método para alterar o estado atual.

Uso do useState:

~~~jsx
export default function PersonUseState() {
    const [name, setName] = useState('Lucas')
    const [age, setAge] = useState(23)

    return <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
}
~~~

### Eventos (onClick e onChange)

A grosso modo eventos são ações do usuário que podem ser capturadas e reagir com código.

#### onClick

Como o nome sugere, onClick é um evento disparado com o usuário clica no componente. 

No exemplo abaixo, ao clicar no `button` o evento de click dispara e chama o método `handleClick`.

~~~jsx
export default function LearnOnClick() {
    const handleClick = () => {
        alert("Você clicou no botão!");
    };

    return <button onClick={handleClick}>Clique aqui</button>;
}
~~~

#### onChange

O evento onChange é disparado, por exemplo, quando o valor de um input muda.

No exemplo abaixo, ao digitar no input, o evento onChange e disparado e chama o método `handleChange`, que por sua vez atualiza o estado `nome`.

~~~jsx
import { useState } from 'react';

export default function LearnOnChange() {
    const [nome, setNome] = useState('');

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>Você digitou: {nome}</p>
        </div>
    );
}
~~~

### Renderização Condicional

As vezes a interface que queremos renderizar depende de alguma condição específica, como o valor de uma variável. Para esses casos podemos fazer uso da renderização opcional a partir de um `if`. 

~~~jsx
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
~~~

Nesse caso o emoji ✅ só sera renderizado se a prop `isChecked` possuir o valor `true`.

O "Problema" de fazer renderização condicional é que em alguns casos (como no exemplo acima) as duas interfaces podem ser muito semelhantes, causando reescrita de código quase identico:

Nesse caso:

~~~jsx
return <li>{itemName} ✅</li>
~~~

É muito similar à:

~~~jsx
return <li>{itemName}</li>
~~~

Para esses casos, ao invés de utilizar `if`, podemos utilizar o operador ternário:

~~~jsx
function Item({itemName, isChecked}) {
    return <li>{itemName} {isChecked ? "✅" : ""}</li>
}
~~~

> Não usar `if` além de evitar reescrita de código, em muitos casos deixa o código mais legível. Mas é claro que **depende** do caso.

### Listas, `map` e `key`

Em ReactJS, quando precisamos renderizar muitos items de uma mesma categoria, utilizamos listas (ou arrays).

~~~tsx
const compras = [
    {id: 1, name: 'Arroz'},
    {id: 2, name: 'Feijão'},
    {id: 3, name: 'Macarrão'}
]
~~~

Muitas vezes criar componentes para representar os itens da lista pode facilitar no desenvolvimento:

~~~jsx
function Item({name}) {
    return <li>{name}</li>
}
~~~

E para efetivamente exibir os itens da lista de forma dinâmica, um método bastante utilizado é o `map`:

~~~tsx
return <section>
    <h1>Lista de Compras</h1>
    <ul>
        {compras.map((item) => {
            return <Item key={item.id} name={item.name} />
        })}
    </ul>
</section>
~~~

#### Key 🔑

Sempre que uma lista de elementos é renderizada, o React exige uma prop `key` única para cada item.

> Usar o indice de um array como `key` até funciona, mas não é recomendado pelo React (e com certeza vai gerar Warnings no seu console). O ideal é que o valor de `key` seja um valor único, como um ID vindo do banco de dados ou um `uuid`.

## Hooks

### useEffect

O useEffect é um dos hooks mais importantes do React. Ele é utilizado para lidar com efeitos colaterais ("side effects") dentro dos componentes.

#### O que são efeitos colaterais?

São ações que acontecem fora do fluxo normal de renderização do componente, como por exemplo:

- Buscar dados de uma API
- Atualizar o document.title
- Manipular timers (como setTimeout ou setInterval)
- Registrar ou remover event listeners

### Forma básica de uso

~~~jsx
import { useEffect } from "react"

export default function LearnUseEffect() {
    useEffect(() => {
        console.log("Esse código roda toda vez que o componente renderiza.");
    });

    return <h1>Testando useEffect</h1>
}
~~~

Nesse exemplo:

Toda vez que o componente for renderizado, a função dentro do useEffect será executada.

#### Executando o efeito SOMENTE quando certas variáveis mudarem

Você pode passar um segundo argumento para o useEffect: um array de dependências.

~~~jsx
import { useEffect, useState } from "react"

export default function LearnUseEffectDep() {
    const [textLength, setTextLength] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        setTextLength(text.length);
    }, [text]);

    return <section>
        <h1>Testando useEffect</h1>
        <textarea placeholder="Escreva aqui" onChange={(evt) => setText(evt.target.value)}></textarea>
        <p>Quantidade de characteres: {textLength}</p>
    </section>
}
~~~

Esse useEffect só roda quando a variável `text` mudar.

> Isso é ótimo para otimizar performance e evitar efeitos desnecessários.

#### Cleanup (limpeza de efeitos)

Em alguns casos, é necessário limpar um efeito antes que ele seja reexecutado ou antes que o componente seja desmontado.

Isso acontece principalmente quando usamos efeitos que ficam ativos, como:

- `setInterval` / `setTimeout`
- Listeners de eventos (ex: `window.addEventListener`)
- WebSockets, etc.

~~~jsx
import { useEffect, useState } from "react";

export default function LearnUseEffectInterval() {
    const [actualDate, setActualDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setActualDate(new Date());
        }, 1000);

        // Cleanup: limpa o intervalo quando o componente for desmontado
        return () => {
            clearInterval(interval);
            console.log("Intervalo limpo!");
        }
    }, []); // roda só uma vez (quando o componente monta)

    return <h1>Data atual: {actualDate.toLocaleString()}</h1>
}
~~~

A função cleanup é chamada nas seguintes circunstâncias:

- Quando o componente é desmontado (sai da tela)
- Quando o efeito é reexecutado (por conta de mudança nas dependências)

#### 👉 Quando usar o cleanup?

Sempre que você iniciar algo que continua rodando ou ouvindo mesmo após a renderização.

Exemplos: timers, listeners, conexões com APIs em tempo real.

> O cleanup evita vazamento de memória, comportamentos estranhos e código executando mesmo com o componente fora da tela.

### useContext

O `useContext` é um Hook do React que permite **compartilhar dados entre componentes** sem a necessidade de "passar as props manualmente" por várias camadas da aplicação.

É muito útil, por exemplo, para compartilhar informações **globais**, como:

- Tema
- Usuário autenticado
- Idioma da aplicação
- Carrinho de compras

---

#### Como funciona?

No React, o `useContext` depende de três passos principais:

1. **Criar o contexto** com `createContext`.
2. **Fornecer o valor** com `Provider`.
3. **Consumir esse valor** com `useContext`.

---

#### Exemplo prático: ThemeContext

1. Criando o contexto e o Provider

~~~tsx
// src/contexts/ThemeContext.jsx

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
~~~

2. Usando o Provider no topo da aplicação

~~~tsx
// src/App.jsx

import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";

export default function App() {
  return (
    <ThemeProvider>
      <h1>Minha aplicação</h1>
      <ThemeToggler />
    </ThemeProvider>
  );
}
~~~

3.  Consumindo o contexto com useContext

~~~tsx
// src/components/ThemeToggler.jsx

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={toggleTheme}>Alternar tema</button>
    </div>
  );
}
~~~

#### Quando usar o useContext?

- Quando é necessário compartilhar dados entre vários componentes, sem passar props manualmente.
- Quando o dado precisa estar disponível em vários níveis da árvore de componentes.

> ⚠️ O useContext não é uma solução para tudo. Ele deve ser usado com cuidado para evitar acoplamentos desnecessários. Se o estado for utilizado apenas por componentes próximos, continue usando props normalmente.

### useRef

O `useRef` é um Hook nativo do React que pode ser usado em duas situações bem comuns:

1. Referenciar diretamente elementos da DOM (por exemplo, dar foco em um input).
2. Armazenar valores entre renderizações sem causar re-render.

Ao declarar:

~~~jsx
const myRef = useRef(initialValue);
~~~

é criado um objeto com a estrutura:

~~~jsx
{ current: valorInicial }
~~~

Esse objeto é persistente entre renderizações. Ou seja: o React não apaga nem reinicia o valor entre os re-renders.

> Importante: Mudar o valor de minhaRef.current NÃO causa uma nova renderização, diferente do useState.

#### Exemplos práticos

1. Focar automaticamente em um input.

~~~jsx
import { useRef, useEffect } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // foca no input ao montar o componente
  }, []);

  return <input ref={inputRef} placeholder="Digite algo..." />;
}
~~~
> Usado quando você quer manipular diretamente um elemento HTML (DOM) — nesse caso, dar foco automático ao input.

2. Armazenar valores entre renderizações.

~~~jsx
import { useEffect, useRef, useState } from "react";

export default function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Valor atual: {count}</p>
      <p>Valor anterior: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
~~~

> Aqui, usamos useRef para armazenar o valor anterior do contador. Como a alteração de ref.current não causa re-render, é ideal para esse tipo de situação.

#### ⚠️ Dicas Importantes

- `useRef` não dispara re-render: perfeito para armazenar dados internos do componente.

- Pode ser usado no lugar de variáveis globais ou valores externos, com a vantagem de estar atrelado ao ciclo de vida do React.

- Pode substituir `document.querySelector` ou `getElementById` na manipulação de DOM.

### useMemo

O `useMemo` é um hook que serve para **memorizar valores calculados**. Ou seja, ele evita que uma função seja recalculada sempre que o componente renderiza, **a menos que alguma das dependências informadas tenha mudado**.

Esse hook é útil principalmente quando temos **funções pesadas ou cálculos complexos** que não devem ser reexecutados à toa, para evitar perda de performance.

Exemplo de uso:

~~~jsx
export default function LearnUseMemo() {
    const [number, setNumber] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const double = useMemo(() => {
        console.log('Calculando...')
        return number * 2;
    }, [number])

    const themeStyle = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '8px'
    };

    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
            <div style={themeStyle}>
                <p>Resultado: {double}</p>
            </div>
        </div>
    );
}
~~~
> Repare que o cálculo de `double` só será executado novamente quando `number` mudar. Isso evita o log "Calculando..." em renderizações causadas por mudanças no `darkMode`, por exemplo.

#### Diferença entre `useMemo` e `useEffect`

É comum que iniciantes usem `useEffect` para tudo — inclusive para lidar com valores derivados de estados. No entanto, **há uma diferença importante entre os dois**:

| Hook        | Quando usar                                          | Retorna           | Exemplo de uso                          |
|-------------|------------------------------------------------------|-------------------|-----------------------------------------|
| `useEffect` | Para **executar efeitos colaterais** (ex: API, Timer) | `undefined`       | Fazer um `fetch`, usar `setInterval`    |
| `useMemo`   | Para **memorizar valores calculados**                | valor memorizado  | Evitar recálculo de um valor derivado   |


Ou seja:

- `useEffect` é usado para executar algo com base em mudanças (efeitos colaterais).
- `useMemo` é usado para calcular um valor e salvá-lo em memória, evitando recálculo desnecessário.


### useCallback

O `useCallback` é um hook do React que memoriza funções, evitando que elas sejam recriadas em toda renderização.

Em React, **funções declaradas dentro de componentes são recriadas sempre que o componente renderiza**. Isso pode causar problemas de performance ou até efeitos colaterais indesejados, especialmente quando:

- A função é passada como prop para outro componente;
- O componente filho depende dessa função dentro de um `useEffect`;
- O componente filho está otimizado com `React.memo`.

#### Exemplo

Imagine que temos um input para buscar frutas, e um componente filho que mostra os itens filtrados. A função que filtra os itens é passada como prop para o filho.

Se não usarmos `useCallback`, essa função será recriada a cada digitação, fazendo o componente filho renderizar novamente à toa.

~~~jsx
// App.jsx
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

export default function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Função de filtro memorizada
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
~~~

~~~jsx
// ListaFiltrada.jsx
import { useEffect, useState } from "react";
import React from "react";

function ListaFiltrada({ getItens }) {
  const [itensFiltrados, setItensFiltrados] = useState([]);

  useEffect(() => {
    const resultado = getItens();
    setItensFiltrados(resultado);
  }, [getItens]);

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
~~~

#### 🤯 Sem useCallback…
A função getItens seria recriada em toda digitação, o que:

- Faz o `useEffect` do filho rodar toda hora;
- Faz o `ListaFiltrada` renderizar novamente mesmo sem necessidade;
- Em apps maiores, isso vira um problema de performance.

#### ✅ Com useCallback…
- A função `getItens` só muda se search mudar.
- O React sabe que não precisa reprocessar a lista se `search` não mudou.
- O `ListaFiltrada` fica mais leve e otimizado.

## Estilização

### CSS puro

📁 Estrutura típica:

~~~css
src/
├── components/
│   └── AppCss.jsx
│   └── AppCss.css
~~~

No seu componente `.jsx`, você importa o arquivo `.css` correspondente:

~~~jsx
// AppCss.jsx
import './AppCss.css';

export default function AppCss() {
    return <p className="text">Hello CSS!</p>;
}
~~~

~~~css
/* AppCss.css */
.text {
    color: blue;
    font-size: 36px;
}
~~~

### Sass (SCSS) no React

Instalação do Sass:

~~~bash
npm install -D sass
~~~

Com isso você já pode usar arquivos `.scss` normalmente.

📁 Estrutura típica:

~~~css
src/
├── components/
│   └── AppScss.jsx
│   └── AppScss.scss
~~~

> No arquivo `.jsx` a importação do `.scss` é identica à importação do `.css`

~~~scss
// AppScss.scss
$text-color: purple;

.text {
    color: $text-color;
    font-size: 40px;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
}
~~~

### CSS Modules

CSS Modules são arquivos `.css` (ou `.scss`) que funcionam como módulos, ou seja: quando você importa, cada classe vira uma **propriedade de um objeto** — isso garante que o estilo será local ao componente e não global.

> 🔒 A principal vantagem é **evitar conflitos de nome de classe**, especialmente em projetos grandes.

📁 Estrutura de arquivos

~~~css
src/
├── components/
│   └── MeuComponente.jsx
│   └── MeuComponente.module.css
~~~

Componente com CSS Module:

~~~jsx
// MyComponent.jsx

import styles from './MyComponent.module.css';

export default function MyComponent() {
    return <p className={styles.text}>Hello CSS modules!</p>
}
~~~

~~~css
/* MyComponent.module.css */
.texto {
  color: green;
  font-weight: bold;
}
~~~

> 📦 O `styles` é um objeto. Se quiser, pode usar `console.log(styles)` pra ver como as classes são convertidas em nomes únicos (ex: `texto_abc123`).

### Styled Components / Emotion

**Styled Components** e **Emotion** são bibliotecas que permitem escrever estilos diretamente dentro dos seus arquivos JavaScript/JSX.

Isso significa que você pode estilizar seus componentes React sem sair do JS, com diversas vantagens:

- Estilos com escopo local automaticamente.
- Estilização baseada em props e lógica JavaScript.
- Sem conflitos de nome de classe.
- Suporte nativo a temas.

#### Instalação

Styled Components:

~~~bash
npm install styled-components
~~~

Emotion:

~~~bash
npm install @emotion/react @emotion/styled
~~~

#### Exemplos

Styled Components:

~~~jsx
import styled from 'styled-components';

const Titulo = styled.h1`
  color: palevioletred;
  font-size: 2rem;
`;

export default function AppStyled() {
  return <Titulo>Hello Styled Components!</Titulo>;
}
~~~

Emotion:

~~~jsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Titulo = styled.h1`
  color: royalblue;
  font-size: 2rem;
`;

export default function AppEmotion() {
  return <Titulo>Hello Emotion!</Titulo>;
}
~~~

#### Quando usar?

Essas bibliotecas são ótimas quando:

- Você quer acoplar estilos aos componentes (estilo + lógica no mesmo lugar).
- Precisa de estilos dinâmicos baseados em props ou estados.
- Quer evitar conflitos de nomes de classes.
- Está criando um Design System ou biblioteca de componentes reutilizáveis.
