import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/index.scss";
import { MainPageAsync as MainPage } from "pages/MainPage";
import { AboutPageAsync as AboutPage } from "pages/AboutPage";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib";

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
