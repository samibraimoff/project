import { classNames } from 'shared/lib'
import './pageLoader.scss'
import { Loader } from 'shared/ui/Loader/Loader'

export const PageLoader = () => {
  return (
    <div className={classNames('page__loader', {}, [])}>
      <Loader />
    </div>
  )
}
