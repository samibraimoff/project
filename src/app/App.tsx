import "./styles/index.scss";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/navbar";
import { ThemeSwitcher } from "widgets/themeSwitcher";

export function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div>
        <ThemeSwitcher />
        <AppRouter />
      </div>
    </div>
  );
}
