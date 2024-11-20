import { Button } from 'antd'
import logo from '@/assets/logo2.png'
import classes from '../index.module.scss'
export default function (props: any) {

  const { actions } = props

  return (<div className={classes.topBar}>
    <img src={logo} alt="logo"/>
    <h2>3D点云(Points Cloud)数据标注平台</h2>
    <div className={classes.actions}>
    {actions.map((item: any,index:number)=><Button disabled={!(!item?.disabledText)} shape="round" color="primary" variant="outlined" ghost key={`action-btn-${index+1}`} onClick={item?.action}>{item.label}</Button>)}
    </div>
  </div>)
}
