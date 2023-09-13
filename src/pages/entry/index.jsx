import {Outlet} from "react-router-dom"
import React from "react";
import Header from "../../components/header";
import {ConfigProvider,theme} from "antd"
import "./index.scss"
import {useSelector} from "react-redux";
import {PrivateRoute} from "../../router"
function Entry() {
  const globalTheme = useSelector((state => state.theme))
  let antdTheme = {
    algorithm:globalTheme.dark?theme.darkAlgorithm:theme.defaultAlgorithm
  }
  if(globalTheme.colorPrimary) {
    antdTheme.token = {
      colorPrimary:globalTheme.colorPrimary
    }
  }
  return (
    <PrivateRoute>
      <ConfigProvider theme={antdTheme}>
        <div className="M-entry">
          <Header/>
          <div className="main-container">
            <Outlet />
          </div>
        </div>
      </ConfigProvider>
    </PrivateRoute>
  )
}
export default Entry
