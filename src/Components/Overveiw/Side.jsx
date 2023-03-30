import React from 'react'
import Icon from './Icon'
import { IoIosTrendingUp } from "react-icons/io";
import { RiBarChartFill } from "react-icons/ri";
import { BiCrown } from "react-icons/bi";
import ProgressBar from './ProgressBar';
import { data } from '../../Data';



const Side = () => {
  return (
    <div className='sidebar'>
      <h5 className='top_head'>WSTF FRONT-END HACKATHON</h5>
      <div className="div1 div">
        <p className="users">
          All Users <span>DETAILS</span>
        </p>
        <p className="total">{data.allUsers}</p>
      </div>
      <div className="iconss">
        
        <Icon
          title="Total Earning"
          count={data.totalEarning}
          bg="#8676FF"
          icon={
            <IoIosTrendingUp
              size="25"
              color="white"
              style={{
                height: "30px",
                width: "30px",
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          }
        />
        <Icon
          title="Sales"
          count={data.sales}
          bg="#66C8FF"
          icon={<BiCrown size="25" color="white" />}
        />
        <Icon
          title="Purchase"
          count={data.purchase}
          bg="#FF9066"
          icon={<RiBarChartFill size="25" color="white" />}
        />
      </div>
      <div className="circle">
        <ProgressBar
          title={data.activeUsers}
          color="blue"
          user="Active Users"
          percentage="27%"
        />
        <ProgressBar
          title={data.newUsers}
          color="green"
          user="New Users"
          percentage="67%"
        />
      </div>
      
    </div>
  )
}

export default Side
