import { Card } from 'antd'
// import { Tiny } from '@ant-design/plots'
import mock from './mock'
import classes from './index.module.scss'
// const { Ring } = Tiny
interface CardConfig {
  title?: string | React.ReactNode
  subTitle?: string | React.ReactNode
  value?: string
  chartData?: number
  des?: string
  rate?: string
  chartHeight?: number
}

const DEFAULT_DATA: CardConfig = {
  subTitle: '商品销售',
  value: mock.value,
  chartData: mock.salePercent,
  des: '周同比:',
  rate: '10.1',
  chartHeight: 100
}

export interface CardTypebarChartProps {
  cardConfig?: CardConfig
}

const CardTypebarChart: React.FunctionComponent<CardTypebarChartProps> = (
  props: CardTypebarChartProps
): React.ReactNode => {
  const { cardConfig = DEFAULT_DATA } = props

  const { title, subTitle, value, des, rate
    //, chartData, chartHeight 
  } = cardConfig
  // const config = {
  //   percent: chartData,
  //   color: ['#E8EFF5', '#66AFF4'],
  //   height: chartHeight,
  //   autoFit: true,
  //   annotations: [
  //     {
  //       type: 'text',
  //       style: {
  //         text: `${chartData! * 100}%`,
  //         x: '50%',
  //         y: '50%',
  //         textAlign: 'center',
  //         fontSize: 16,
  //         fontStyle: 'bold'
  //       }
  //     }
  //   ]
  // }
  return (
    <Card title={title}>
      <div className={classes.cardSubTitle}>{subTitle}</div>
      <div className={classes.cardValue}>{value}</div>
      <div className={classes.cardDes}>
        {des}
        <span>{rate}↑</span>
      </div>
      {/* <Ring {...config} /> */}
    </Card>
  )
}

export default CardTypebarChart
