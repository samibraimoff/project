import { useTranslation } from 'react-i18next'

function AboutPage () {
  const { t } = useTranslation(['translation', 'about'])
  return (
      <div>
          <h2>{t('aboutPage')}</h2>
      </div>
  )
}

export default AboutPage
