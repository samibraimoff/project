import { classNames } from 'shared/lib'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  classes?: string
}

// reload page to fix error
const reloadPage = () => {
  location.reload();
}

export const PageError = ({ classes }: PageErrorProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.pageError, {}, [classes ?? ''])}>
      <p>{t('someThingWentWrong')}</p>
      <Button
        onClick={reloadPage}
        classes={styles.errorButton}>
        {t('reloadPage')}
      </Button>
    </div>
  )
}
