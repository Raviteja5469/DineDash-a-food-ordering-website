import React from 'react';
import './explore_menu2.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const Explore_menu2 = ({ category, setCategory }) => {
  return (
    <div className='explore_menu' id='explore_menu'>
      <h1>Explore our Delicious menu</h1>
      <p className='explore_menu_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus provident aliquam sequi, cupiditate illo officia aspernatur vero repellendus explicabo unde officiis tempora tenetur voluptates maiores sed mollitia!</p>
      <div className="explore_menu_list">
        {menu_list.map((item, index) => (
          <div onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))} key={index} className="explore_menu_list_item">
            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Explore_menu2;
