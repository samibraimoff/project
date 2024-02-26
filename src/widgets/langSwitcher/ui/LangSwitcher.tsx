import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./LangSwitcher.module.scss";

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggleLng = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <Button
      onClick={toggleLng}
      classes={styles.langSwitcher}
      theme={ThemeButton.CLEAR}
    >
      {t("translate")}
    </Button>
  );
};
