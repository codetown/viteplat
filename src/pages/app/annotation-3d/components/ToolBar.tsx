import classes from '../index.module.scss'
import { Button, Tooltip } from 'antd'
import { ApartmentOutlined, BarChartOutlined, CalculatorOutlined, CodeOutlined, FormOutlined } from '@ant-design/icons'
export default function (props: any) {
  const { actions } = props
  const icons=[<FormOutlined />,<BarChartOutlined />,<ApartmentOutlined />,<CalculatorOutlined />,<CodeOutlined />]
  return <div className={classes.toolBar}>
    <div className={classes.actions}>
      {actions.map((item: any, index: number) => (
        <div className={classes.iconButtonBox} key={`action-btn-${index + 1}`} title={item?.disabledText ?? item.label}>
          <Tooltip title={item.label}>
          <Button color="primary" variant='text' disabled={!(!item?.disabledText)} icon={icons[index]} onClick={item?.action} />
          </Tooltip>
        </div>
      ))}
    </div>
  </div>
}
