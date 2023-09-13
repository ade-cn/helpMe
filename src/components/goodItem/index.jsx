import React from 'react';
import {Card, Dropdown, Image, Space, Tag} from 'antd'
import EllipsisOutlined from "@ant-design/icons/lib/icons/EllipsisOutlined";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import MessageOutlined from "@ant-design/icons/lib/icons/MessageOutlined";
import {useNavigate} from "react-router-dom"

const {Meta} =Card
function GoodItem(props) {
  const {index} = props
  const navigate = useNavigate()

  let src = index%2===0?"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png":"https://www.w3school.com.cn/i/photo/tulip.jpg"
  const items = [
    {
      key: '1',
      label: (
        <div>不喜欢少推</div>
      ),
    },
    {
      key: '2',
      label: (
        <div>举报它</div>
      ),
    }
  ];
  return (
    <div >
      <Card
        hoverable
        style={{
          width: 240
        }}
        cover={<Image
          src={src}
          placeholder={
            <Image
              preview
              src={src}
            />
          }
        />}
        actions={[
          <HeartOutlined />,
          <MessageOutlined />,
          <Dropdown
            menu={{
              items,
            }}
            placement="topLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <EllipsisOutlined key="ellipsis" />
          </Dropdown>
          ,
        ]}
      >
        <Meta
          onClick={()=>navigate("/detail")}
          title="救救我救救我救救我救救我"
          description={<>报酬：13元 <br/> 期待完成时间：10月12日</>}
        />
        <Space style={{marginTop:13}} size={[0, 4]} wrap>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </Space>
      </Card>
    </div>
  );
}

export default GoodItem;
