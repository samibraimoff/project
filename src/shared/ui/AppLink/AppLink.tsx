import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./AppLink.module.scss";
import { classNames } from "shared/lib";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  classes?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    classes,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [classes as string, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
