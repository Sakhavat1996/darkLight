import { useContext } from "react";
import { ThemeContext } from "../store/theme-context";

export default function Header() {
  const {handleTheme} = useContext(ThemeContext)
  return (
    <header>
        <h2>Theme</h2>
        <button onClick={handleTheme}>Rəngi Dəyişdir</button>
    </header>
  );
}