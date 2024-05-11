import { useState } from 'react'
import { Radio, Card } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { Pie } from '@ant-design/plots'
import styles from './index.module.scss'

interface CardConfig {
  title?: string
  value?: number
  chartData?: Array<Record<string, any>>
  chartHeight?: number
}

const DEFAULT_DATA: CardConfig = {
  title: '销售额类别占比',
  value: 183112,
  chartData: [
    {
      type: '事例一',
      value: 40,
      title: '事例一 | 40.00%     ¥4,544'
    },
    {
      type: '事例二',
      value: 21,
      title: '事例二 | 22.12%     ¥2,344'
    },
    {
      type: '事例三',
      value: 17,
      title: '事例三 | 16.59%     ¥3,512'
    },
    {
      type: '事例四',
      value: 13,
      title: '事例四 | 13.11%     ¥2,341'
    },
    {
      type: '事例五',
      value: 9,
      title: '事例五 |  9.29%     ¥1,231'
    }
  ],
  chartHeight: 300
}

export interface CardPieChartProps {
  cardConfig?: CardConfig
}

const CardPieChart: React.FunctionComponent<CardPieChartProps> = (props: CardPieChartProps): JSX.Element => {
  const { cardConfig = DEFAULT_DATA } = props
  const [type, setType] = useState('one')
  const changeType = (e: RadioChangeEvent) => {
    setType(e.target.value)
  }
  const config = {
    data: cardConfig.chartData,
    angleField: 'value',
    colorField: 'type',
    appendPadding: 10,
    height: cardConfig.chartHeight,
    legend: {
      color: {
        title: false,
        position: 'bottom',
        rowPadding: 5,
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      autoRotate: false,
      style: { textAlign: 'center' }
    },
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v: any) => `¥ ${v}`
      }
    },
    statistic: {
      title: {
        offsetY: -8
      },
      content: {
        offsetY: -4
      }
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active' },
      {
        type: 'pie-statistic-active',
        cfg: {
          start: [
            { trigger: 'element:mouseenter', action: 'pie-statistic:change' },
            { trigger: 'legend-item:mouseenter', action: 'pie-statistic:change' }
          ],
          end: [
            { trigger: 'element:mouseleave', action: 'pie-statistic:reset' },
            { trigger: 'legend-item:mouseleave', action: 'pie-statistic:reset' }
          ]
        }
      }
    ]
  };
  return (
    <Card title={cardConfig.title}>
      <Radio.Group value={type} onChange={changeType} className={styles.radioGroup} optionType="button">
        <Radio value="one" className={styles.radioFlex}>
          类目一
        </Radio>
        <Radio value="two" className={styles.radioFlex}>
          类目二
        </Radio>
        <Radio value="three" className={styles.radioFlex}>
          类目三
        </Radio>
      </Radio.Group>
      <Pie
        {...config}
      />
    </Card>
  )
}

export default CardPieChart
