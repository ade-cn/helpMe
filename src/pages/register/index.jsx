import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Upload
} from 'antd';
import ImgCrop from 'antd-img-crop';
import { useNavigate } from "react-router-dom"
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const navigate = useNavigate()
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
        backgroundColor:"#fff",
        padding:"50px 70px 20px 0 ",
        margin:"0px auto",
        borderRadius:"30px"

      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="邮箱"
        tooltip="用于登录?"
        rules={[
          {
            type: 'email',
            message: '输入的不是一个邮箱!',
          },
          {
            required: true,
            message: '请输入你的邮箱!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="account"
        label="账号"
        tooltip="用于登录?"
        rules={[
          {
            required: true,
            message: '请输入你的账号!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入你的密码!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请确认你的密码!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('俩次输入的密码不一致!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="昵称"
        tooltip="你想其他人叫你什么?"
        rules={[
          {
            required: true,
            message: '请输入你的昵称!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="avatar" label="头像">
        <ImgCrop rotationSlider>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            maxCount={1}
          >
            {fileList.length < 5 && '+ Upload'}
          </Upload>
        </ImgCrop>
      </Form.Item>
      <Form.Item
        name="residence"
        label="所在地区"
        rules={[
          {
            type: 'array',
            required: true,
            message: '请选择你的所在地区!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="手机号码"
        rules={[

        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>



      <Form.Item
        name="intro"
        label="介绍"
        rules={[

        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别!',
          },
        ]}
      >
        <Select placeholder="选择性别">
          <Option value="male">男</Option>
          <Option value="female">女</Option>
          <Option value="other">其它</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="profession"
        label="行业"
        rules={[
          {
            required: true,
            message: '请选择性别!',
          },
        ]}
      >
        <Select placeholder="选择行业">
          <Option value="male">土木</Option>
          <Option value="female">it</Option>
          <Option value="other">教师</Option>
        </Select>
      </Form.Item>
      <Form.Item label="邮箱验证码" extra="我们必须确保你是真实用户">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          我已阅读 <a href="">用户协议</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
        <Button type="primary" onClick={()=>navigate("/login")} ghost style={{marginLeft:20}} >
          去登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
