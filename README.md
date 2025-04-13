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
