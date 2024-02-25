import "./styles/index.scss";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/router";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <AppRouter />
    </div>
  );
}
