import React from 'react'
// import Home from '../Home'
import Barchart from './Barchart'
import Info from './Info'
import Mapp from './Mapp'

import SideBar from './Sidebar'

const Overveiw = () => {
  return (
    <div>
     <SideBar/>
     <SideBar/>
      <Mapp/>
      <Barchart/>
      <Info/>
    </div>
  )
}

export default Overveiw
