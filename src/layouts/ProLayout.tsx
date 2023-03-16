import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined
} from '@ant-design/icons'
import { ProLayout, ProSettings, SettingDrawer } from '@ant-design/pro-layout'
import { Input, theme } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MenuCard from './MenuCard'
import defaultProps from './_defaultProps'

const SearchInput = () => {
  const { token } = theme.useToken()
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid
            }}
          />
        }
        placeholder="搜索方案"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24
        }}
      />
    </div>
  )
}

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true
  })

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1')
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh'
      }}
    >
      <ProLayout
        prefixCls="my-prefix"
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px'
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px'
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px'
          }
        ]}
        {...defaultProps}
        location={{
          pathname
        }}
        siderMenuType="group"
        menu={{
          collapsedShowGroupTitle: true
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮'
        }}
        // actionsRender={(props) => {
        //   if (props.isMobile) return [];
        //   return [
        //     props.layout !== "side" && document.body.clientWidth > 1400 ? (
        //       <SearchInput />
        //     ) : undefined,
        //     <InfoCircleFilled key="InfoCircleFilled" />,
        //     <QuestionCircleFilled key="QuestionCircleFilled" />,
        //     <GithubFilled key="GithubFilled" />,
        //   ];
        // }}
        headerTitleRender={(logo: any, _: any) => {
          const defaultDom = (
            <a>
              {logo}
              123
            </a>
          )
          if (document.body.clientWidth < 1400) {
            return defaultDom
          }
          if (_.isMobile) return defaultDom
          return (
            <>
              {defaultDom}
              <MenuCard />
            </>
          )
        }}
        menuFooterRender={(props: any) => {
          if (props?.collapsed) return undefined
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          )
        }}
        onMenuHeaderClick={(e: any) => console.log(e)}
        menuItemRender={(item: any, dom: any) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome')
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <Outlet />
        <SettingDrawer
          pathname={pathname}
          enableDarkTheme
          getContainer={() => document.getElementById('test-pro-layout')}
          settings={settings}
          onSettingChange={(changeSetting: any) => {
            setSetting(changeSetting)
          }}
          disableUrlParams={false}
        />
      </ProLayout>
    </div>
  )
}
