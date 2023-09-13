import {SwapLeftOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React from "react";
import {useNavigate } from "react-router-dom"
function Back() {
  const navigate = useNavigate()
  return (
    <div style={{paddingBottom:"20px"}}>
      <Button  type="primary" onClick={()=>navigate(-1)} shape="circle" icon={<SwapLeftOutlined />} size="large" />

    </div>
  )
}
export default Back
