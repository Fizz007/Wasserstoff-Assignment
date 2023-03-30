import React from 'react';
import { RiCopperDiamondLine } from "react-icons/ri";
import { data } from '../../Data';
import { CaretUpOutlined, PlusOutlined, QuestionCircleOutlined, ShareAltOutlined, SyncOutlined } from '@ant-design/icons';

const Card = () => {
  return (
    <div className="design">
      <p className="headingDesign">Design Faster</p>

      <div className="circle-earning">
        <div className="circles item-center">
          <div className="innercircle item-center">
            <div className="innermostcircle item-center">
              <RiCopperDiamondLine size="30" color="#8676FF" />
            </div>
          </div>
        </div>
        <p className='total_earning'>Total earning </p>
        <p className="updown">
          ${data.totalEarning} <span><CaretUpOutlined />2%</span>
        </p>
        <p className="compare">Compared to $21,504 last year</p>
        <div className="types">
          <div>
            Travel <span>{data.travel}</span>
            
          </div>
          <div>
            Presentation <span>{data.presentation}</span>
            
          </div>
          <div>
            Research <span>{data.research}</span>
           
          </div>
        </div>
      </div>
      <div className="bg-blue" style={{ color: "white" }}>
        <div >
          <p style={{ fontSize: "0.7rem" }}>Total earning</p>
          <p style={{ fontSize: "1.6rem" }}>
            ${data.totalEarning} <span><CaretUpOutlined />10%</span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem" }}>
            Compared to $21,504 last year
          </p>
       
      
          <p style={{ fontSize: "0.7rem" }}>Sales</p>
          <p style={{ fontSize: "1.6rem" }}>
            ${data.sales} <span><CaretUpOutlined />12%</span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem" }}>
            Compared to $21,504 last year
          </p>
        </div>
      </div>

      <div className="types acc-data">
        <div className='earning_sales'>
          Travel <span>{data.travel}</span>
          {data.travel1}
        </div>
        <div className='earning_sales'>
          Presentation <span>{data.presentation}</span>{data.presentation1}
        </div>
        <div className='earning_sales'>
          Buisness <span>{data.buisness}</span>{data.buisness1}
        </div>
      </div>
    </div>
  )
}

export default Card
