import { BellOutlined } from '@ant-design/icons'
import { Badge, Dropdown, Spin, Tabs } from 'antd'
import type { NoticeIconTabProps } from './NoticeList'
import NoticeList from './NoticeList'
import classes from './index.module.scss'
import { useState } from 'react'
import React from 'react'

const { TabPane } = Tabs

export type NoticeIconProps = {
  count?: number
  bell?: React.ReactNode
  className?: string
  loading?: boolean
  onClear?: (tabName: string, tabKey: string) => void
  onItemClick?: (item: any, tabProps: NoticeIconTabProps) => void
  onViewMore?: (tabProps: NoticeIconTabProps, e: MouseEvent) => void
  onTabChange?: (tabTile: string) => void
  style?: React.CSSProperties
  onPopupVisibleChange?: (visible: boolean) => void
  popupVisible?: boolean
  clearText?: string
  viewMoreText?: string
  clearClose?: boolean
  emptyImage?: string
  children?: React.ReactElement<NoticeIconTabProps>[]
}

const NoticeIcon: React.FC<NoticeIconProps> & {
  Tab: typeof NoticeList
} = (props: NoticeIconProps) => {
  const getNotificationBox = (): React.ReactNode => {
    const { children, loading, onClear, onTabChange, onItemClick, onViewMore, clearText, viewMoreText } = props
    if (!children) {
      return null
    }
    const panes: React.ReactNode[] = []
    React.Children.forEach(children, (child: React.ReactElement<NoticeIconTabProps>): void => {
      if (!child) {
        return
      }
      const { list, title, count, tabKey, showClear, showViewMore } = child.props
      const len = list && list.length ? list.length : 0
      const msgCount = count || count === 0 ? count : len
      const tabTitle: string = msgCount > 0 ? `${title} (${msgCount})` : title
      panes.push(
        <TabPane tab={tabTitle} key={tabKey}>
          <NoticeList
            clearText={clearText}
            viewMoreText={viewMoreText}
            list={list}
            tabKey={tabKey}
            onClear={(): void => onClear && onClear(title, tabKey)}
            onClick={(item): void => onItemClick && onItemClick(item, child.props)}
            onViewMore={(event): void => onViewMore && onViewMore(child.props, event)}
            showClear={showClear}
            showViewMore={showViewMore}
            title={title}
          />
        </TabPane>
      )
    })
    return (
      <>
        <Spin spinning={loading} delay={300}>
          <Tabs className={classes.tabs} onChange={onTabChange}>
            {panes}
          </Tabs>
        </Spin>
      </>
    )
  }

  const { count, bell } = props

  const [visible, setVisible] = useState<boolean>(false)
  const notificationBox = getNotificationBox()
  const NoticeBellIcon = bell || <BellOutlined className={classes.icon} />
  const trigger = (
    <span className={classes.noticeButton}>
      <Badge count={count} style={{ boxShadow: 'none' }} className={classes.badge}>
        {NoticeBellIcon}
      </Badge>
    </span>
  )
  if (!notificationBox) {
    return trigger
  }

  return (
    <Dropdown
      placement="bottomRight"
      overlayClassName={classes.popover}
      trigger={['click']}
      open={visible}
      onOpenChange={setVisible}>
      {trigger}
    </Dropdown>
  )
}

NoticeIcon.defaultProps = {
  emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
}

NoticeIcon.Tab = NoticeList

export default NoticeIcon
