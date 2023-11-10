import React from 'react';
import MenuList from "../utils/MenuList.json";
import MenuItem from '../utils/MenuItem';
import BannerImage from '../assets/pixelGalaxy.jpg';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className="menuTitle">Products</h1>

      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              id = {menuItem.id} // so that the id can increase per each click of the add to cart button
              key={key}
              image={menuItem.image}
              price={menuItem.price}
              name={menuItem.name}
              detail={menuItem.detail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
