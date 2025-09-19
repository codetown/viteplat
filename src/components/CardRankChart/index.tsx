import { Card, Row, Col, Divider } from 'antd'
import classes from './index.module.scss'

interface DataItem {
  name?: string
  rate?: string
  color?: string
}

interface CardConfig {
  title?: string
  dataSource?: DataItem[]
}

export interface CardRankChartProps {
  cardConfig?: CardConfig
}

const DEFAULT_DATA: CardConfig = {
  title: '区域销售',
  dataSource: [
    { name: '亚洲', rate: '40%', color: '#2B7FFB' },
    { name: '欧洲', rate: '30%', color: '#00D6CB' },
    { name: '南非', rate: '20%', color: '#F0C330' },
    { name: '美洲', rate: '10%', color: '#3840D9' }
  ]
}

const CardRankChart: React.FunctionComponent<CardRankChartProps> = (props: CardRankChartProps): React.ReactNode => {
  const { cardConfig = DEFAULT_DATA } = props
  const { title, dataSource } = cardConfig
  return (
    <Card title={title}>
      <Row>
        <Col span={12}>
          <div className={classes.hisMap} />
        </Col>
        <Col span={6}>
          <div className={classes.histogram}>
            {dataSource &&
              dataSource.map((item, idx) => (
                <div
                  key={idx}
                  style={{ marginBottom: 20, display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                  <div className={classes.hisTitle}>{item.name}</div>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ backgroundColor: item.color, width: item.rate }} />
                    <div className={classes.hisRate}>{item.rate}</div>
                  </div>
                </div>
              ))}
          </div>
        </Col>
        <Col span={6}>
          <div className={classes.subCard}>
            <Divider type="vertical" className={classes.subDiv} />
            <div className={classes.subBody}>
              <div className={classes.subName}>亚洲</div>
              <Divider type="horizontal" />
              <div className={classes.subMain}>
                <div>
                  <div className={classes.subTypeName}>商品类目1</div>
                  <div className={classes.subTypeValue}>6,123</div>
                </div>
                <Divider type="vertical" className={classes.subMainDiv} />
                <div>
                  <div className={classes.subTypeName}>商品类目2</div>
                  <div className={classes.subTypeValue}>1,324</div>
                </div>
              </div>
              <div className={classes.subFooter}>
                <div>周同比</div>
                <div>45%↑</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default CardRankChart
