import React from 'react'
import { FloatButton } from 'antd';
import { MinusOutlined, PlusOutlined, QuestionCircleOutlined, ShareAltOutlined, SyncOutlined } from '@ant-design/icons';
import { AiOutlineBranches, AiOutlineMinus, AiOutlinePlus, AiOutlineShareAlt } from 'react-icons/ai';
import { TbCircleDot } from "react-icons/tb";

const FloatingIcon = () => {
  return (
    <aside className='floating_icon'>
      <FloatButton.Group shape="square" style={{ right: 85 }}>
      <FloatButton icon={<AiOutlineMinus />} />
      
      <FloatButton icon={<AiOutlinePlus />} />
     
      <FloatButton icon={<AiOutlineShareAlt />} />
      <FloatButton icon={<TbCircleDot />} />
     
    </FloatButton.Group>
      <FloatButton.Group shape="square" style={{ right: 85,}}>
      <FloatButton icon={<AiOutlineBranches />} />
      
     
     
    </FloatButton.Group>
    </aside>
  )
}

export default FloatingIcon
