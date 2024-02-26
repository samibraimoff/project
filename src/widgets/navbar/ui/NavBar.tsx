import { classNames } from 'shared/lib'
import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  classes?: string
}

export function NavBar ({ classes }: NavBarProps) {
  const { t } = useTranslation()
  return (
      <div className={classNames(styles.navbar, {}, [classes!])}>
          <div className={styles.links}>
              <AppLink
                  to="/"
                  theme={AppLinkTheme.PRIMARY}
                  className={styles.mainLink}
        >
                  {t('mainPage')}
              </AppLink>
              <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
                  {t('aboutPage')}
              </AppLink>
          </div>
      </div>
  )
}
