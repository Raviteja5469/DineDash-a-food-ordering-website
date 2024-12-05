import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
const navbar = () => {

    const[menu,setMenu]= useState('menu')
  return (
    <div className='Navbar'>
      <div className="logo_with_name">
      <img src={assets.logo} alt="" className="logo" />
      <h1>DineDash</h1>
      </div>
        
        <ul className="navbar_optios_menu">
          <li onClick={()=>setMenu("Home")} className={menu==='Home'?"active":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu==='Menu'?"active":""}>Menu</li>
          <li onClick={()=>setMenu("Mobile-App")} className={menu==='Mobile-App'?"active":""}>Mobile-App</li>
          <li onClick={()=>setMenu("Contact us")} className={menu==='Contact us'?"active":""}>Contact us</li>
        </ul>
        <div className="nav_bar_right">
          <img src={assets.search_icon} alt="" />
          <div className="nav_bar_search_icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign-In</button>
        </div>
    </div>
  )
}

export default navbar
