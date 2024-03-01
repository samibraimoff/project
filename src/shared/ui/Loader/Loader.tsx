import { classNames } from 'shared/lib'
import './Loader.scss'

interface LoaderProps {
  classes?: string
}

export const Loader = ({ classes }: LoaderProps) => {
  return (
    <div className={classNames('lds-spinner', {}, [classes ?? ''])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
