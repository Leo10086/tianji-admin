'use client'
import { Button, Input, Space } from 'antd'
import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import './index.scss'
import React from 'react';
 const Login: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (<div className='wrapper'>
        <div className='left'></div>
        <div className='right'>
            <header>YunLian Global</header>
            <main>
                <Space direction="vertical" size={'large'}>
                    <h2>登录</h2>
                    <div>
                        <p>账号</p>
                        <Input
                            placeholder="请输入邮箱地址"
                        />
                    </div>
                    <div>
                        <p>密码</p>
                        <Input.Password
                            placeholder="请输入密码"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                    
                    <Button type="primary">登录</Button>
                    <div>
                        还没有账号？ <a href="#" className='reg'>立即注册</a>
                    </div>
                </Space>
            </main>
            <footer>© 云连国际 版权所有</footer>
            
        </div>
    </div>)
}
export default Login