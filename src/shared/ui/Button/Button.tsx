import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, classes, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(styles.btn, {}, [classes as string, styles[theme as ThemeButton]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
