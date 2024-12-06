import React from 'react'
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import home from './pages/Home/home'
import Header from './components/Header/Header'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/cart" element={<cart />} />
        <Route path="/order" element={<placeorder />} />
      </Routes>
      <Header/>
    </div>
  )
}

export default App
