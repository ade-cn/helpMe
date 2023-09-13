import React, {useState} from 'react';
import { Button, Form, Input, InputNumber,DatePicker, TimePicker, Modal, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons';
import dayjs from 'dayjs';
import Back from "../../components/back";



const AddHelp = () => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 16,
      },
      sm: {
        span: 16,

      },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 16,
        offset: 8
      },
      sm: {
        span: 16,
        offset: 8
      },
    },
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onTimeChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div className="w">
      <Back/>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入标题"/>
        </Form.Item>
        <Form.Item
          name='content'
          label="内容"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea placeholder="请输入内容" />
        </Form.Item>
        <Form.Item
          name='price'
          label="报酬"
        >
          <InputNumber placeholder="请输入报酬"  addonAfter="￥" />
        </Form.Item>
        <Form.Item
          label="图片"
        >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
        </Form.Item>
        <Form.Item label="截止时间">
          <Form.Item name='endDate' style={{ display: 'inline-block'}}>
            <DatePicker  onChange={onDateChange} />
          </Form.Item>
          <Form.Item name='endTime'  style={{ display: 'inline-block', margin: '0 8px' }}>
            <TimePicker  style={{marginLeft:10}} onChange={onTimeChange}  />
          </Form.Item>
        </Form.Item>
        <Form.List
          name="names"
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  label={index === 0 ? '标签' : ''}
                  name="labelItem"
                  key={field.key}
                >
                    <Form.Item
                      {...field}
                      name="label"
                      noStyle
                    >
                      <Input
                        placeholder="请输入标签名"
                        style={{
                          width: '60%',
                          marginRight: 10
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                </Form.Item>
              ))}
              <Form.Item
                {...formItemLayoutWithOutLabel}
              >
                 <Button
                   type="dashed"
                   onClick={() => add()}
                   style={{
                     width: '60%',
                   }}
                   icon={<PlusOutlined />}
                 >
                   添加标签
                 </Button>
                 <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Form.Item style={{ display: 'inline-block'}}>
            <Button type="primary" htmlType="submit">
              发布
            </Button>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
            <Button type="primary" style={{marginLeft:"20px"}} danger htmlType="reset">
              重置
            </Button>
          </Form.Item>
        </Form.Item>
      </Form></div>
  );
}
export default AddHelp;
