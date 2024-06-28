import { Card } from 'antd'
import { Column } from '@ant-design/plots';
import styles from './index.module.scss'

interface CardConfig {
  title?: string
  chartData?: Array<Record<string, any>>
  chartHeight?: number
}

const DEFAULT_DATA: CardConfig = {
  title: '消费数据',
  chartData: [
    { category: '品类一', value: 123, type: '门店一' },
    { category: '品类一', value: 231, type: '门店二' },
    { category: '品类一', value: 321, type: '门店三' },
    { category: '品类二', value: -234, type: '门店一' },
    { category: '品类二', value: -342, type: '门店二' },
    { category: '品类二', value: -432, type: '门店三' },
    { category: '品类三', value: 322, type: '门店一' },
    { category: '品类三', value: 211, type: '门店二' },
    { category: '品类三', value: 113, type: '门店三' },
    { category: '品类四', value: 435, type: '门店一' },
    { category: '品类四', value: 543, type: '门店二' },
    { category: '品类四', value: 333, type: '门店三' },
    { category: '品类五', value: 111, type: '门店一' },
    { category: '品类五', value: 452, type: '门店二' },
    { category: '品类五', value: 234, type: '门店三' }
  ],
  chartHeight: 360
}

export interface CardGroupBarChartProps {
  cardConfig?: CardConfig
}

const CardGroupBarChart: React.FunctionComponent<CardGroupBarChartProps> = (
  props: CardGroupBarChartProps
): JSX.Element => {
  const { cardConfig = DEFAULT_DATA } = props
  const config = {
    data: cardConfig.chartData,
    xField: 'category',
    yField: 'value',
    colorField: 'type',
    legend: {
      color: {
        title: false,
        position: 'top',
        layout: {
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }
      }
    },
    height: cardConfig.chartHeight,
    group: true,
    style: {
      // 矩形四个方向的内边距
      inset: 5,
      // 矩形单个方向的内边距
      // insetLeft:5,
      // insetRight:20,
      // insetBottom:10
      // insetTop:10
    },
  };
  return (
    <Card title={cardConfig.title} className={styles.cardGroupBarChart}>
      <Column {...config} />
    </Card>
  )
}

export default CardGroupBarChart
