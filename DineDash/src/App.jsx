import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
const App = () => {
  return (
    <div className='app'>
      <Home/>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/cart" element={<cart />} />
        <Route path="/order" element={<placeorder />} />
      </Routes>
      
    </div>
  )
}

export default App
