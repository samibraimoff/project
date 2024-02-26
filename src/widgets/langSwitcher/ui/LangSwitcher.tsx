import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation()
  const toggleLng = () => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  return (
      <Button
          onClick={toggleLng}
          theme={ThemeButton.CLEAR}
    >
          {t('translate')}
      </Button>
  )
}
