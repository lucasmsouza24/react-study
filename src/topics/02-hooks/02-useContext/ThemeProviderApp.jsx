import { useState, createContext } from "react";
import ChildComponent from "./ChildComponent";

export const ThemeContext = createContext();

export default function ThemeProviderApp() {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <ChildComponent />
        </ThemeContext.Provider>
    )
}
