import { useState } from 'react'
import classes from './index.module.scss'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
export default function (props: any) {

  console.info('props=>', props)
  
  const [isDropped, setIsDropped] = useState(false)
  const { actions } = props
  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true)
    }
  }

  return <div className={classes.toolBar}>
    <div className={classes.actions}>
    {actions.map((item: any,index:number)=>(
      <Tooltip title={item.label}>
      <Button ghost icon={<SearchOutlined />} key={`action-btn-${index+1}`} onClick={item?.action}/>
      </Tooltip>))}
    </div>
  </div>
}
