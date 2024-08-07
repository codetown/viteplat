import { useState } from 'react'
import { Tag, message } from 'antd'
import NoticeIcon from './NoticeIcon'
import classes from './index.module.scss'
import useGlobalStore from '@/stores/global'

export type GlobalHeaderRightProps = {
  fetchingNotices?: boolean
  onNoticeVisibleChange?: (visible: boolean) => void
  onNoticeClear?: (tabName?: string) => void
}

const getNoticeData = (notices: any[]): any => {
  if (!notices || notices.length === 0 || !Array.isArray(notices)) {
    return {}
  }

  const newNotices = notices.map((notice) => {
    const newNotice = { ...notice }

    if (newNotice.datetime) {
      newNotice.datetime = ''
    }

    if (newNotice.id) {
      newNotice.key = newNotice.id
    }

    if (newNotice.extra && newNotice.status) {
      // const color = {
      //   todo: '',
      //   processing: 'blue',
      //   urgent: 'red',
      //   doing: 'gold'
      // }[newNotice.status]
      newNotice.extra = (
        <Tag
          color="blue"
          style={{
            marginRight: 0
          }}>
          {newNotice.extra}
        </Tag>
      ) as any
    }

    return newNotice
  })
  return newNotices
}

const getUnreadData = (noticeData: any) => {
  const unreadMsg: Record<string, number> = {}
  Object.keys(noticeData).forEach((key) => {
    const value = noticeData[key]

    if (!unreadMsg[key]) {
      unreadMsg[key] = 0
    }

    if (Array.isArray(value)) {
      unreadMsg[key] = value.filter((item) => !item.read).length
    }
  })
  return unreadMsg
}

const NoticeDropdown: React.FC = () => {
  const { currentUser } = useGlobalStore((state: any) => state.currentUser)
  const [notices, setNotices] = useState<any[]>([])

  // useEffect(() => {
  //   setNotices(data || [])
  // }, [data])

  const noticeData = getNoticeData(notices)
  const unreadMsg = getUnreadData(noticeData || {})

  const changeReadState = (id: string) => {
    setNotices(
      notices.map((item) => {
        const notice = { ...item }
        if (notice.id === id) {
          notice.read = true
        }
        return notice
      })
    )
  }

  const clearReadState = (title: string, key: string) => {
    setNotices(
      notices.map((item) => {
        const notice = { ...item }
        if (notice.type === key) {
          notice.read = true
        }
        return notice
      })
    )
    message.success(`${'清空了'} ${title}`)
  }

  return (
    <NoticeIcon
      className={classes.action}
      count={currentUser && currentUser.unreadCount}
      onItemClick={(item) => {
        changeReadState(item.id!)
      }}
      onClear={(title: string, key: string) => clearReadState(title, key)}
      loading={false}
      clearText="清空"
      viewMoreText="查看更多"
      onViewMore={() => message.info('Click on view more')}
      clearClose>
      <NoticeIcon.Tab
        tabKey="notification"
        count={unreadMsg.notification}
        list={noticeData.notification}
        title="通知"
        emptyText="你已查看所有通知"
        showViewMore
      />
      <NoticeIcon.Tab
        tabKey="message"
        count={unreadMsg.message}
        list={noticeData.message}
        title="消息"
        emptyText="您已读完所有消息"
        showViewMore
      />
      <NoticeIcon.Tab
        tabKey="event"
        title="待办"
        emptyText="你已完成所有待办"
        count={unreadMsg.event}
        list={noticeData.event}
        showViewMore
      />
    </NoticeIcon>
  )
}

export default NoticeDropdown
