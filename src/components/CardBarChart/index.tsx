import { Card } from 'antd'
import mock from './mock'
import styles from './index.module.scss'
import { Tiny, TinyLineConfig } from '@ant-design/charts'
const { Column } = Tiny
interface CardConfig {
  title?: string | React.ReactNode
  subTitle?: string | React.ReactNode
  value?: string
  chartData?: number[]
  des?: string
  rate?: number
  chartHeight?: number
}

const DEFAULT_DATA: CardConfig = {
  subTitle: '总销售额',
  value: mock.value,
  chartData: mock.saleList,
  des: '周同比:',
  rate: 10.1,
  chartHeight: 100
}

export interface CardBarChartProps {
  cardConfig?: CardConfig
}

const CardBarChart: React.FunctionComponent<CardBarChartProps> = (props: CardBarChartProps): JSX.Element => {
  const { cardConfig = DEFAULT_DATA } = props

  const { title, subTitle, value, chartData, des, rate, chartHeight } = cardConfig
  const config:TinyLineConfig = {
    data:chartData!.map((value, index) => ({ value, index })),
    autoFit:true,
    height: chartHeight,
    xField: 'index',
    yField: 'value',
  }
  return (
    <Card title={title}>
      <div className={styles.cardSubTitle}>{subTitle}</div>
      <div className={styles.cardValue}>{value}</div>
      <div className={styles.cardDes}>
        {des}
        <span>{rate}↑</span>
      </div>
      <Column {...config} />
    </Card>
  )
}

export default CardBarChart
