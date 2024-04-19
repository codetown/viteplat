import { Card } from 'antd'
import { Tiny, TinyLineConfig } from '@ant-design/charts'
import mock from './mock'
import styles from './index.module.scss'
const { Area } = Tiny
interface CardConfig {
  title: string | React.ReactNode
  subTitle: string | React.ReactNode
  value: string
  chartData: number[]
  des: string
  rate: string
  chartHeight: number
}

const DEFAULT_DATA: CardConfig = {
  title: '',
  subTitle: '访问量',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: '12.0',
  chartHeight: 100
}

interface CardAreaChartProps {
  cardConfig?: CardConfig
}

const CardAreaChart: React.FunctionComponent<CardAreaChartProps> = (props: CardAreaChartProps): JSX.Element => {
  const { cardConfig = DEFAULT_DATA } = props
  const { title, subTitle, value, chartData, des, rate, chartHeight } = cardConfig
  const config: TinyLineConfig = {
    data: chartData.map((value, index) => ({ value, index })),
    height: chartHeight,
    autoFit: true,
    shapeField: 'smooth',
    xField: 'index',
    yField: 'value',
    style: {
      lineWidth: 2,
      fill: '#00D6CB',
      fillOpacity: 0.2
    }
  }
  return (
    <Card title={title} className={styles.areaChart}>
      <div className={styles.cardSubTitle}>{subTitle}</div>
      <div className={styles.cardValue}>{value}</div>
      <div className={styles.cardDes}>
        {des}
        <span>{rate}↑</span>
      </div>
      <Area {...config} />
    </Card>
  )
}

export default CardAreaChart
