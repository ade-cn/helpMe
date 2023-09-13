import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import logo from '@/assets/react.svg'
import { Input ,Button} from "antd";
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
      <img src={logo} className="logo" />
      <div className="ipt-con">
        <Input placeholder="账号"/>
      </div>
      <div className="ipt-con">
        <Input.Password placeholder="密码"/>
      </div>
      <div className="ipt-con">
        <Button onClick={()=>{login()}} type="primary" block={true}>
          登录
        </Button>
      </div>
    </div>
  );
}

export default Login;

