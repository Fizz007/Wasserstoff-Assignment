import React from "react";

import "../Dashboard/Bubbles.css";

const Bubbles = () => {
  return (
    
      <div className="bubbles item-center">
      <div class="cont">
          <div class="button__container">
            <button class="button">1W</button>
            <button class="button">1M</button>
            <button class="button button--active">3M</button>
            <button class="button">1Y</button>
            <button class="button">ALL</button>
          </div>
        </div>
        <div className="all-bubles item-center">
          <div className="pink first">
            <p>Investment</p>
            <p className="updown">$12,875</p>
          </div>
          <div className="pink second"></div>
          <div className="center-div item-center">
            <div className="innermost">
              <p>Investment</p>
              <p className="updown">$12,875</p>
            </div>
          </div>
          <div className="yellow"></div>
          <div className="purple purple1"></div>
          <div className="purple purple2"></div>
          <div className="purple purple3"></div>
          <div className="purple purple4"></div>
          <div className="blue blue1"></div>
          <div className="blue blue2"></div>
          <div className="blue blue3">
            <p>Investment</p>
            <p className="updown">$12,875</p>
          </div>
          <div className="blue blue4"></div>
          <div className="blue blue5"></div>
          <div className="pink third">
            <p>Investment</p>
            <p className="updown">$12,875</p>
          </div>
          <div className="pink forth">
            <p>Investment</p>
            <p className="updown">$12,875</p>
          </div>
        </div>
        <div className="data">
          <div>
            <span className="title">TREND GOOD</span>
            <br />
            <span className="title_data">204</span>
          </div>
          <div>
            <span className="title">SHOPPING VIEWS</span>
            <br />
            <span className="title_data">65,540</span>
          </div>
          <div>
            <span className="title">STORE DYNAMICS</span>
            <br />
            <span className="title_data">324</span>
          </div>
        </div>
      </div>
 
  );
};

export default Bubbles;
