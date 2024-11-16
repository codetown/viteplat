import classes from '../index.module.scss'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const colors=['primary','danger','default']
export default function (props: any) {
  const { actions } = props
  return <div className={classes.toolBar}>
    <div className={classes.actions}>
      {actions.map((item: any, index: number) => (
        <div className={classes.iconButtonBox} key={`action-btn-${index + 1}`} title={item?.disabledText ?? item.label}>
          <Button color={colors[index%3] as ("primary" | "danger" | "default" | undefined) } variant='outlined' ghost disabled={!(!item?.disabledText)} icon={<SearchOutlined />} onClick={item?.action} />
        </div>
      ))}
    </div>
  </div>
}
