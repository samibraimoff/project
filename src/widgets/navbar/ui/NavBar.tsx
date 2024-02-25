import { classNames } from "shared/lib";
import styles from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  classes?: string;
}

export function NavBar({ classes }: NavBarProps) {
  return (
    <div className={classNames(styles.navbar, {}, [classes])}>
      <div className={styles.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.PRIMARY}
          className={styles.mainLink}
        >
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
          About
        </AppLink>
      </div>
    </div>
  );
}
