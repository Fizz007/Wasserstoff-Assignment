
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Comingsoon from './Components/Comingsoon';
import Dashboard from './Components/Dashboard/Dashboard';
import FloatingIcon from './Components/Dashboard/FloatingIcon';

import Footer from './Components/Footer';


import Navbar from './Components/Navbar';

import Overveiw from './Components/Overveiw/Overveiw';

function App() {
 
  return (
    <>
    <Navbar/>
   
    <Routes>
     
     <Route path='/' element={<Overveiw/>} />
     <Route path='/dashboard' element={<Dashboard/>} />
     <Route path='/analytics' element={<Comingsoon/>} />
   
    </Routes>
      
    <Footer/>
    </>
  );
}

export default App;
