import { classNames } from 'shared/lib'
import styles from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/providers/theme'

import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  classes?: string
}

export const ThemeSwitcher = ({ classes }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <div className={classNames(styles.themeSwitcher, {}, [classes as string])}>
          <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
              {theme === Theme.DARK
                ? (
                    <DarkIcon width={32} height={32} />
                  )
                : (
                    <LightIcon width={32} height={32} />
                  )}
          </Button>
      </div>
  )
}
