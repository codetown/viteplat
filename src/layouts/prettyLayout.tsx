
import {
   Layout
} from 'antd'
import classes from './pretty-layout.module.scss'

const { Header, Sider, Content } = Layout
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    marginBottom: 16,
    borderRadius: 8,
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
    borderRadius: 8,
    height:'calc(100vh - 112px)'
  };
  
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
    marginRight:16,
    borderRadius: 8,
    height:'calc(100vh - 112px)'
  };
// }
const PrettyLayout = () => {
  return (
    <Layout className={classes.layout}>
    <Header style={headerStyle}>Header</Header>
    <Layout>
      <Sider width="256" style={siderStyle}>
        Sider
      </Sider>
      <Content style={contentStyle}>Content</Content>
    </Layout>
  </Layout>
  )
}

export default PrettyLayout
