import React, {useEffect, useState} from 'react';
import {Row,Col,FloatButton ,Tooltip  } from 'antd'
import GoodItem from "../../components/goodItem";
import { PlusOutlined, SyncOutlined} from '@ant-design/icons';
import Macy from 'macy'
import {useNavigate} from "react-router-dom"
import "./index.scss"
const dataImages = [
  "https://picsum.photos/640/200/?random",
  "https://picsum.photos/360/640/?random",
  "https://picsum.photos/480/720/?random",
  "https://picsum.photos/480/640/?random",
  "https://picsum.photos/360/?random",
  "https://picsum.photos/360/520/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/720/640/?random",
]
function GoodUItem(props) {
  const [data, setData] = useState(dataImages)
  const [masonry, setMasonry] = useState(null);
  const [columns, setColumns] = useState(4);
  const  navigate = useNavigate()
  const getMacy =()=>{
    if (masonry) {
      //当数据更新时，会重新计算并排版
      masonry.reInit()
    } else {
      let masonry = new Macy({
        container: '.macy-container', // 图像列表容器
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        margin: { x: 10, y: 45 },    // 设计列与列的间距
        columns: columns.valueOf(),    // 设置列数
      })
      setMasonry(masonry)
    }
  }
  //当数据变化则调用getMacy，重新计算
  useEffect(()=>{
    getMacy()
  },[data])
  return (
    <div className="P-home w">
      <Row gutter={[0, 0]} className="macy-container">
        {
          [..."1231231233"].map((v,index)=>{
            return  <Col key={index} align="center" className="gutter-row " >
                <GoodItem index={index}></GoodItem>
              </Col>
          })
        }
      </Row>
      <FloatButton.Group
        shape="circle"
      >
        <Tooltip placement="top" title="发布求救">
          <FloatButton onClick={()=>navigate("/addHelp")} icon={<PlusOutlined />} />
        </Tooltip>
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop visibilityHeight={500} />
      </FloatButton.Group>
    </div>
  );
}

export default GoodUItem;
