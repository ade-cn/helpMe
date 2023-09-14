import {createHashRouter, Navigate} from "react-router-dom";
import Login from "../pages/login";
import React from "react";
import Home from "../pages/home";
import Account from "../pages/chatRoom";
import Entry from "../pages/entry";
import {globalConfig} from '../globalConfig'
import Detail from "../pages/detail";
import AddHelp from "../pages/addHelp";
import Register from "../pages/register";
import UserInfo from "../pages/userInfo";

export const globalRouters = createHashRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/',
    element: <Entry/>,
    children: [
      {
        path: '/home',
        element: <Home/>,
      },
      {
        path: '/detail',
        element: <Detail/>,
      },
      {
        path: '/addHelp',
        element: <AddHelp/>,
      },
      {
        path: '/chatRoom',
        element: <Account/>,
      },
      {
        path: '/userInfo',
        element: <UserInfo/>,
      },
      {
        // 如果URL没有"#路由"，跳转Home页面
        path: '/',
        element: <Navigate to="/home"/>,
      },
      {
        // 未匹配，跳转Login页面
        path: '*',
        element: <Navigate to="/login"/>,
      },
    ]
  }
])

// 路由守卫
export function PrivateRoute(props) {
  console.log(props)
  // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
  return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (
    props.children
  ) : (
    <Navigate to="/login"/>
  )
}
