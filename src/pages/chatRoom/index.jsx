import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Avatar, Divider, List, Skeleton,Typography , Empty, Row,Col,Input,Button} from 'antd';
const { TextArea } = Input;
import { AntDesignOutlined } from '@ant-design/icons';
import "./index.scss"
const { Text, Link } = Typography;
const ChatRoom = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex,setActiveIndex] = useState(-1)
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div className="w">
      <Row align="top" className="content">
        <Col span={8}><div
          id="scrollableDiv"
          style={{
            height: 600,
            overflow: 'auto',
            borderRight: '2px solid #f5f5f5'

          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={
              <Skeleton
                avatar
                paragraph={{
                  rows: 1,
                }}
                active
              />
            }
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={data}
              renderItem={(item,index) => (
                <List.Item key={item.email} className={activeIndex===index?"item active":"item"} onClick={()=>setActiveIndex(index)}  >
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content{index}</div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div></Col>
        <Col span={16}  >
          <div style={{position:'relative',height:'600px'}}>
            <div className="chatList">
              <div className="messageBox">
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
                  icon={<AntDesignOutlined />}
                />
                <div className="msg">
                  <Text strong>helsdfsdfssdfasdfasdfasdfasdfasdfsdfsdfsdfsddfsdf world</Text>
                </div>
              </div>
              <div className="messageBox right">
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
                  icon={<AntDesignOutlined />}
                />
                <div className="msg">
                  <Text strong>hello world</Text>
                </div>
              </div>

            </div>
            <div className="inputBox">
              <TextArea rows={4}  />
              <Button type="primary">发送</Button>
            </div>
          </div>
        </Col>
      </Row>


    </div>
  );
};
export default ChatRoom;
