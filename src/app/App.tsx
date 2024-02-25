import "./styles/index.scss";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/navbar";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>theme</button>
    </div>
  );
}
