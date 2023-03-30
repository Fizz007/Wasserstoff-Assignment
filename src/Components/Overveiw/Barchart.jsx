import React from 'react'
import { Bar, BarChart } from 'recharts';
import { data } from '../../Data';

const Barchart = ({handleOpen}) => {
    const barData = [
        { value: 10 },
        { value: 12 },
        { value: 13 },
        { value: 14 },
        { value: 10 },
        { value: 17 },
        { value: 25 },
        { value: 18 },
      ];

      
  return (
    <div className="barchart">
      <div className="sales-figer">
        <h3 style={{ color: "#383874", fontWeight: "600" }}>
          <div style={{ fontSize: "18px", display:"flex" ,margin:"8px 0", alignItems:"center", justifyContent:"center" , cursor:"pointer" }} onClick={handleOpen}>Sales Figures</div>
       
          <span style={{fontSize: "18px", display:"flex" , justifyContent:"start"}}>${data.salesFigures}</span>
        </h3>
      </div>
      <div className="graph" style={{ display: "flex" }}>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={barData}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        
        <div className="underline"></div>
      </div>
    </div>
  )
}

export default Barchart
