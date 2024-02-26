import { useState } from 'react'
import { classNames } from 'shared/lib'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/themeSwitcher'
import { LangSwitcher } from 'widgets/langSwitcher'

interface SidebarProps {
  classes?: string
}

export const Sidebar = ({ classes }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prevState) => !prevState)
  }
  return (
      <div
          className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
            classes!
          ])}
    >
          <button onClick={onToggle}>toggle</button>
          <div className={styles.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  )
}
