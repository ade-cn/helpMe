import {Button, Card, Menu} from "antd";
import {MoonOutlined, ThemeOutlined, SunOutlined} from "../extraIcons";
import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom"
import {HomeOutlined, UserOutlined} from '@ant-design/icons'
import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import { setDark } from "../../store/slices/theme"
import ThemeModal from "../themeModal";
import {globalConfig} from "../../globalConfig";

function Header(props) {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    {
      label: "求救大厅",
      key: "/home",
      icon: <HomeOutlined/>,
      onClick: () => {
        navigate("/home")
      }
    },
    {
      label: "聊天室",
      key: "/chatRoom",
      icon: <UserOutlined/>,
      onClick: () => {
        navigate("/chatRoom")
      }
    }
  ]
  const dispatch = useDispatch()
  const theme = useSelector((state => state.theme))
  const [showThemeModal, setShowThemeModal] = useState(false)
  return (
    <Card className="M-header">
      <div className="header-wrapper">
        <div className="logo-con">救救我</div>
        <div className="menu-con">
          <Menu mode="horizontal" selectedKeys={location.pathname} items={menuItems}/>
        </div>
        <div className="opt-con">
          {theme.dark ? (
            <Button
              icon={<SunOutlined/>}
              shape="circle"
              onClick={() => {
                dispatch(setDark(false))
              }}
            ></Button>
          ) : (
            <Button
              icon={<MoonOutlined/>}
              shape="circle"
              onClick={() => {
                dispatch(setDark(true))
              }}
            ></Button>
          )}

          {
            // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
            globalConfig.customColorPrimarys &&
            globalConfig.customColorPrimarys.length > 0 && (
              <Button
                icon={<ThemeOutlined/>}
                shape="circle"
                onClick={() => {
                  setShowThemeModal(true)
                }}
              ></Button>
            )
          }
        </div>
      </div>
      {
        // 显示主题色换肤对话框
        showThemeModal && (
          <ThemeModal
            onClose={() => {
              setShowThemeModal(false)
            }}
          />
        )
      }
</Card>
)

}

export default Header
