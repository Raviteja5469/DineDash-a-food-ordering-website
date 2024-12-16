import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Cart from './pages/cart/cart';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Navbar from './components/Navbar/navbar';
import PlaceOrder from './pages/Placeorder/Placeorder'; // Assuming this is the correct path

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

