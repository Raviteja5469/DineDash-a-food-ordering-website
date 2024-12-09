import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/navbar'
import Header from '../../components/Header/Header'
import Explore_menu2 from '../../components/Explore_menu2/explore_menu2'
const Home = () => {
  const[category,setCatogery]= useState("All")
  return (
    <div>
      <Navbar/> 
      <Header/>  
      <Explore_menu2/>

    </div>
  )
}

export default Home
