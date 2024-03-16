import { useContext } from "react";
import Header from "../components/Header";
import { ThemeContext } from "../store/theme-context";

export default function Page() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Header/>
      <h1>React Course</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illum soluta error, facere quo, totam eveniet maiores quos cumque illo earum ab omnis dolor, consequuntur quaerat exercitationem ad deleniti rerum.</p>
    </div>
  );
}