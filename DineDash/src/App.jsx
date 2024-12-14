import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
const App = () => {

  const[showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopUp/>:<></>}
      <div className='app'>
        

      <Home/>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/cart" element={<cart />} />
        <Route path="/order" element={<placeorder />} />
      </Routes>
    </div>
    <Footer/>
    </>
    
    
  )
}

export default App
