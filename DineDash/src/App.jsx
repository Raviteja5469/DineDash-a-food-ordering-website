import React from 'react'
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<cart />} />
        <Route path="/order" element={<placeorder />} />
      </Routes>
    </div>
  )
}

export default App
