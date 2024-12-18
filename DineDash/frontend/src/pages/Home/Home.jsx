import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu2 from '../../components/Explore_menu2/explore_menu2';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'; // Update the import statement
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu2 category={category} setCategory={setCategory} />
      <FoodDisplay category={category} /> 
      <AppDownload/>
    </div>
  );
};

export default Home;
