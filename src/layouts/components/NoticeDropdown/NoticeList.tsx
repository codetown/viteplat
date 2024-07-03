import { Avatar, List } from 'antd'
import classes from './list.module.scss'

export type NoticeIconTabProps = {
  count?: number
  showClear?: boolean
  showViewMore?: boolean
  style?: React.CSSProperties
  title: string
  tabKey: string
  onClick?: (item: any) => void
  onClear?: () => void
  emptyText?: string
  clearText?: string
  viewMoreText?: string
  list: any[]
  onViewMore?: (e: any) => void
}
const NoticeList: React.FC<NoticeIconTabProps> = ({
  list = [],
  onClick,
  onClear,
  title,
  onViewMore,
  emptyText,
  showClear = true,
  clearText,
  viewMoreText,
  showViewMore = false
}: NoticeIconTabProps) => {
  if (!list || list.length === 0) {
    return (
      <div className={classes.notFound}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg" alt="not found" />
        <div>{emptyText}</div>
      </div>
    )
  }
  return (
    <div>
      <List<any>
        className={classes.list}
        dataSource={list}
        renderItem={(item, i) => {
          const leftIcon = item.avatar ? (
            typeof item.avatar === 'string' ? (
              <Avatar className={classes.avatar} src={item.avatar} />
            ) : (
              <span className={classes.iconElement}>{item.avatar}</span>
            )
          ) : null

          return (
            <List.Item
              className={classes.item}
              key={item.key || i}
              onClick={() => {
                onClick?.(item)
              }}>
              <List.Item.Meta
                className={classes.meta}
                avatar={leftIcon}
                title={
                  <div className={classes.title}>
                    {item.title}
                    <div className={classes.extra}>{item.extra}</div>
                  </div>
                }
                description={
                  <div>
                    <div className={classes.description}>{item.description}</div>
                    <div className={classes.datetime}>{item.datetime}</div>
                  </div>
                }
              />
            </List.Item>
          )
        }}
      />
      <div className={classes.bottomBar}>
        {showClear ? (
          <div onClick={onClear}>
            {clearText} {title}
          </div>
        ) : null}
        {showViewMore ? (
          <div
            onClick={(e) => {
              if (onViewMore) {
                onViewMore(e)
              }
            }}>
            {viewMoreText}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NoticeList
