import React from 'react'
// import Home from '../Home'
import Barchart from './Barchart'
import Info from './Info'
import Mapp from './Mapp'

import Side from './Side'

const Overveiw = () => {
  return (
    <div>
     <Side/>
      <Mapp/>
      <Barchart/>
      <Info/>
    </div>
  )
}

export default Overveiw
