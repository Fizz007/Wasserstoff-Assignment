import React from 'react'

const Icon = (props) => {
  return (
    <div className="ic">
      <div className="icon" style={{ backgroundColor: `${props.bg}` }}>
        <div>{props.icon}</div>
      </div>
      <div className="ern">
        <p className="hd">{props.title}</p>
        <p className="count">{props.count}</p>
      </div>
    </div>
  )
}

export default Icon
