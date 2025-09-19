import { useState } from 'react'
import { Radio, Card } from 'antd'
import type { RadioChangeEvent } from 'antd'
// import { Pie } from '@ant-design/plots'
import classes from './index.module.scss'

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
  chartHeight: 360
}

export interface CardPieChartProps {
  cardConfig?: CardConfig
}

const CardPieChart: React.FunctionComponent<CardPieChartProps> = (props: CardPieChartProps): React.ReactNode => {
  const { cardConfig = DEFAULT_DATA } = props
  const [type, setType] = useState('one')
  const changeType = (e: RadioChangeEvent) => {
    setType(e.target.value)
  }
  // const config = {
  //   data: cardConfig.chartData,
  //   angleField: 'value',
  //   colorField: 'type',
  //   innerRadius: 0.6,
  //   height: cardConfig.chartHeight,
  //   label: {
  //     text: 'value',
  //     style: {
  //       fontWeight: 'bold',
  //     },
  //   },
  //   legend: {
  //     color: {
  //       title: '图例',
  //       position: 'top',
  //       rowPadding: 8,
  //       layout: {
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         flexDirection: 'column',
  //       }
  //     },
  //   },
  //   annotations: [
  //     {
  //       type: 'text',
  //       style: {
  //         text: '销量',
  //         x: '50%',
  //         y: '50%',
  //         textAlign: 'center',
  //         fontSize: 32,
  //         fontStyle: 'bold',
  //       },
  //     },
  //   ],
  // };
  return (
    <Card title={cardConfig.title}>
      <Radio.Group value={type} onChange={changeType} className={classes.radioGroup} optionType="button">
        <Radio value="one" className={classes.radioFlex}>
          类目一
        </Radio>
        <Radio value="two" className={classes.radioFlex}>
          类目二
        </Radio>
        <Radio value="three" className={classes.radioFlex}>
          类目三
        </Radio>
      </Radio.Group>
     
      {/* <Pie
        {...config}
      /> */}
    </Card>
  )
}

export default CardPieChart
