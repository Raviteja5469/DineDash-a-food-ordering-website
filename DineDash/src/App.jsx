import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
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
