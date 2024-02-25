import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPageAsync";
import { AboutPage } from "./pages/AboutPage/AboutPageAsync";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/about">About</Link>
      <Link to="/">Main</Link>
      <button onClick={toggleTheme}>theme</button>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
