import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/chatRoom'
import {ConfigProvider}  from 'antd'
import {RouterProvider} from "react-router-dom"
import zhCN from 'antd/locale/zh_CN'
import {store} from './store'
import {Provider} from 'react-redux'
import './index.css'
import './common/styles/frame.scss'
import {globalRouters} from "./router";
import "./mock"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={globalRouters}/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
