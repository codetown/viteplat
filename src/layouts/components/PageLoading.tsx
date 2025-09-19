import classes from '../auth-layout.module.scss'
import { Spin } from 'antd'
const PageLoading: React.FC = () => {
  return (
    <div className={classes.pageLoading}>
      <Spin size="large" />
    </div>
  )
}

export default PageLoading
