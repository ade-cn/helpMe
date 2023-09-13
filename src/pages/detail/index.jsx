import React from 'react';
import Back from "../../components/back";
import {MessageOutlined, HeartOutlined, EyeOutlined} from "@ant-design/icons";
import {Image, Carousel, Avatar, Card, Row, Col, Statistic,Descriptions,Button} from "antd";

const dataImages = [
  "https://picsum.photos/200/640/?random",
  "https://picsum.photos/200/720/?random",
  "https://picsum.photos/200/640/?random",
  "https://picsum.photos/200/200/?random",
  "https://picsum.photos/200/?random",
  "https://picsum.photos/200/520/?random",
  "https://picsum.photos/200/360/?random",
  "https://picsum.photos/200/360/?random",
  "https://picsum.photos/200/360/?random",
  "https://picsum.photos/200/640/?random",
]
const items = [
  {
    key: '1',
    label: '内容',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China，No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    span: 2

  },
  {
    key: '2',
    label: '报酬',
    children: '18元',
    span: 2
  },
  {
    key: '3',
    label: '标签',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: '截止时间',
    children: '2033-10-11 12:00',
  },
  {
    key: '5',
    label: 'IP属地',
    children: '江西',
  },
];
function Detail(props) {
  return (
    <div className="w">
      <Back></Back>
      <Row gutter={{xs: 8, sm: 16, md: 24}}>
        <Col span={6}>
          <Carousel autoplay dotPosition="top">
            {
              dataImages.map((v, index) => {
                return <div key={index}>
                  <Image src={v}></Image>
                </div>
              })
            }
          </Carousel>
        </Col>
        <Col span={18}>
          <Row>
            <Descriptions title="求救信息——求救中" layout="vertical" items={items} />
          </Row>
          <Row gutter={16}>
            <Col span={9}>
              <Card
                style={{
                  width: 300,
                }}
              >
                <Card.Meta
                  avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={5}>
              <Statistic title="浏览" value={1128} prefix={<EyeOutlined />}/>
            </Col>
            <Col span={5}>
              <Statistic title="留意" value={1128} prefix={<HeartOutlined/>}/>
            </Col>
            <Col span={5}>
              <Statistic title="想救" value={93} prefix={<MessageOutlined/>}/>
            </Col>
          </Row>
          <Button style={{marginTop:20}} icon={<MessageOutlined />} type="primary" block>
            救救他
          </Button>
        </Col>
      </Row>

    </div>
  );
}

export default Detail;
