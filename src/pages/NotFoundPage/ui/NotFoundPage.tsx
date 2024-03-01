import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.pageNotFound, {}, [])}>
      <h1>
        {t('pageNotFound')}
      </h1>
    </div>
  )
}
