import { useContext } from "react"
import { ThemeContext } from "./ThemeProviderApp"

export default function ChildComponent() {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div>
            <p>Tema atual: {theme}</p>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Alternar tema
            </button>
        </div>
    )
    
}
