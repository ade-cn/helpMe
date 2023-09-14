import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import logo from '@/assets/react.svg'
import { Input ,Button, Divider} from "antd";
import './index.scss'
import {apiReqs} from "../../api";

function Login(props) {
  const navigate = useNavigate()
  const [account,setAccount] = useState('')
  const [password,setPassword] = useState('')
  const login = () => {
    apiReqs.signIn({
      data:{
        account,
        password
      },
      success:(res) => {
        console.log(res)
        navigate("/home")
      }
    })
  }
  return (
    <div className="P-login">
      <img src={logo} className="logo" onClick={()=>navigate("/")} />
      <div className="ipt-con">
        <Input placeholder="账号"/>
      </div>
      <div className="ipt-con">
        <Input.Password placeholder="密码"/>
      </div>
      <div className="ipt-con">
        <Button onClick={()=>{login()}} type="primary" block={true} style={{marginBottom:20}}>
          登录
        </Button>
        <Button type="link">QQ登录</Button>
        <Button type="link">微信登录</Button>
        <Button type="link">邮箱登录</Button>
        <Divider plain>没有账号？<Button type="link" onClick={()=>navigate("/register")}>去注册</Button></Divider>
      </div>
    </div>
  );
}

export default Login;

