import React from 'react';
import { RiCopperDiamondLine } from "react-icons/ri";

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
        <p>Total earning</p>
        <p className="updown">
          $12,875 <span>2% up</span>
        </p>
        <p className="compare">Compared to $21,504 last year</p>
        <div className="types">
          <div>
            Travel <span>852</span>
            
          </div>
          <div>
            Presentation <span>753</span>
            
          </div>
          <div>
            Research <span>553</span>
           
          </div>
        </div>
      </div>
      <div className="bg-blue" style={{ color: "white" }}>
        <div>
          <p style={{ fontSize: "0.7rem" }}>Total earning</p>
          <p style={{ fontSize: "1rem" }}>
            $12,875 <span>2% up</span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem" }}>
            Compared to $21,504 last year
          </p>
        </div>
        <div>
          <p style={{ fontSize: "0.7rem" }}>Sales</p>
          <p style={{ fontSize: "1rem" }}>
            $43,123 <span>12% up</span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem" }}>
            Compared to $21,504 last year
          </p>
        </div>
      </div>

      <div className="types acc-data">
        <div className='earning_sales'>
          Travale <span>760</span>
          2540
        </div>
        <div className='earning_sales'>
          Presentation <span>650</span>2304
        </div>
        <div className='earning_sales'>
          Research <span>612</span>2140
        </div>
      </div>
    </div>
  )
}

export default Card
