import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import { food_list } from '../../assets/frontend_assets/assets';
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = ({ category }) => {
  const { food_display } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h1 className='heading'>Top Dishes near you</h1>
      <div className="food-display-list">
      {food_list.map((item,index)=>{
        return<Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
      })}
      </div>
    </div>
  )
};

export default FoodDisplay;

