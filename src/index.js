// 引入react
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import App from './App';

// 全局样式
import '@/common/stylus/frame.styl'

const antdConfig = {
    locale: zhCN,
}

ReactDOM.render(
    <ConfigProvider {...antdConfig} >
        <App />
    </ConfigProvider >,
    document.getElementById('root')
)