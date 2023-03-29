import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    
  return (
    <footer className='footer'>
        <p className="data-visual">ORION DATA VISULAIZATION</p>
      <p className="year">{date}</p>
    </footer>
  )
}

export default Footer
