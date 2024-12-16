import React, { useContext, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('Home');

    const {getTotalCartAmount} = useContext(StoreContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <Link to='/'><div className="logo_with_name">
                <img src={assets.logo} alt="" className="logo" />
                <h1>DineDash</h1>
            </div></Link>
            <div className={`navbar_options_menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <Link to='/' onClick={() => setMenu("Home")} className={menu === 'Home' ? "active" : ""}>Home</Link>
                    <a href='#explore_menu' onClick={() => setMenu("Menu")} className={menu === 'Menu' ? "active" : ""}>Menu</a>
                    <a href='#app_download' onClick={() => setMenu("Mobile-App")} className={menu === 'Mobile-App' ? "active" : ""}>Mobile-App</a>
                    <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === 'Contact us' ? "active" : ""}>Contact us</a>
                </ul>
            </div>
            <div className="nav_bar_right">
                <img src={assets.search_icon} alt="" />
                <div className="nav_bar_search_icon">
                   <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {/* <button>Sign In</button> */}
                <button onClick={()=>setShowLogin(true)} className="sign-up">Sign Up</button>
            </div>
            {/* <div className="menu_toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
        </div>
    );
};

export default Navbar;
  