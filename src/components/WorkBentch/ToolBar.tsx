// import { useState } from 'react'
import classes from './index.module.scss'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
export default function (props: any) {

  console.info('props=>', props)
  const { actions } = props
  // const [isDropped, setIsDropped] = useState(false)
  // function handleDragEnd(event: any) {
  //   if (event.over && event.over.id === 'droppable') {
  //     setIsDropped(true)
  //   }
  // }

  return <div className={classes.toolBar}>
    <div className={classes.actions}>
    {actions.map((item: any,index:number)=>(
      <div className={classes.iconButtonBox} key={`action-btn-${index+1}`}>
      <Button title={item?.disabledText??item.label} disabled={!(!item?.disabledText)}ghost icon={<SearchOutlined />} onClick={item?.action}/>
      </div>
      ))}
    </div>
  </div>
}
