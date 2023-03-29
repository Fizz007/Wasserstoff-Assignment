import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="active_sec">
      <div
        className="active_user"
        style={{
          background: `conic-gradient(${props.color} ${props.percentage}, lightgray 25%)`,
        }}
      >
        <div className="sty">
            <div style={{ color: "#383874", fontWeight: "400" }}>
              {props.percentage}
            </div>
        </div>
      </div>
      <p style={{ paddingLeft: "1rem", color: "#383874", fontWeight: "400" }}>
        <span>{props.title}</span>
        <br />
        <span>{props.user}</span>
      </p>
    </div>
  );
};

export default ProgressBar;
