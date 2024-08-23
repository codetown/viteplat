import { Card } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import md5 from 'blueimp-md5'
import classes from './login-new.module.scss'
import { Button, Checkbox, Form, Input } from 'antd'
import { fetchLogin } from '@/services/common'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo2.png'
import loginImg from '@/assets/login-img.png'
export default function Login() {
    const navigate = useNavigate()
    const onFinish = async (values: any) => {
        const passMD5 = md5(values.password)
        const res = await fetchLogin({ ...values, password: passMD5 })
        const { code, data } = res
        if (code == 200) {
            sessionStorage.setItem('jwt', data)
            navigate('/')
            // 跳转到首页
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div className={classes.container}>
            <Card bordered={false}>
                <div className={classes.content}>
                    <Form
                        name="login"
                        className={classes.loginForm}
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        size="large"
                        autoComplete="off">
                        <div className={classes.title}>
                            <img src={logo} className={classes.logo} alt="" />
                            <strong>Web-Plat通用管理系统</strong>
                        </div>
                        <Form.Item name="username" label="账号" rules={[{ required: true, message: '请输入用户名！' }]}>
                            <Input prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码！' }]}>
                            <Input.Password prefix={<LockOutlined />} />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            登录
                        </Button>
                    </Form>
                    <div className={classes.infoImg}>
                        <div>
                            <h2>About Birdoo</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <h3>Features</h3>
                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum has been the industry's standard</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            </ul>
                        </div>
                        <img src={loginImg} alt="Illustration" />
                    </div>
                </div>
            </Card>
        </div>
    )
}
