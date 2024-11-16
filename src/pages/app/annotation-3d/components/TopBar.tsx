import { Button } from 'antd'
import classes from '../index.module.scss'
export default function (props: any) {

  const { actions } = props

  return <div className={classes.topBar}>
    <div className={classes.actions}>
    {actions.map((item: any,index:number)=><Button disabled={!(!item?.disabledText)} shape="round" color="primary" variant="outlined" ghost key={`action-btn-${index+1}`} onClick={item?.action}>{item.label}</Button>)}
    </div>
  </div>
}
