import { Avatar, List } from 'antd'
import styles from './list.module.scss'

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
      <div className={styles.notFound}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg" alt="not found" />
        <div>{emptyText}</div>
      </div>
    )
  }
  return (
    <div>
      <List<any>
        className={styles.list}
        dataSource={list}
        renderItem={(item, i) => {
          const leftIcon = item.avatar ? (
            typeof item.avatar === 'string' ? (
              <Avatar className={styles.avatar} src={item.avatar} />
            ) : (
              <span className={styles.iconElement}>{item.avatar}</span>
            )
          ) : null

          return (
            <List.Item
              className={styles.item}
              key={item.key || i}
              onClick={() => {
                onClick?.(item)
              }}>
              <List.Item.Meta
                className={styles.meta}
                avatar={leftIcon}
                title={
                  <div className={styles.title}>
                    {item.title}
                    <div className={styles.extra}>{item.extra}</div>
                  </div>
                }
                description={
                  <div>
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.datetime}>{item.datetime}</div>
                  </div>
                }
              />
            </List.Item>
          )
        }}
      />
      <div className={styles.bottomBar}>
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
