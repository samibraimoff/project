import { type FC, useMemo, useState } from 'react'
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY
} from '../lib/ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as unknown as Theme) || Theme.LIGHT

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
