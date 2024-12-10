import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/navbar';
import Header from '../../components/Header/Header';
import ExploreMenu2 from '../../components/Explore_menu2/explore_menu2';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'; // Update the import statement

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu2 category={category} setCategory={setCategory} />
      <FoodDisplay category={category} /> 
    </div>
  );
};

export default Home;
