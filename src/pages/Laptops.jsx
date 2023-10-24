import React from 'react';
import { MenuList } from '../utils/MenuList';
import MenuItem from '../Components/Products/MenuItem';
import '../Components/Products/Menu.css';

function Laptops() {

  const laptopItems = MenuList.filter(menuItem => menuItem.type === 'Laptop');
  return (
    <div className="menu">
      <h1 className="menuTitle">Laptops</h1>

      <div className="menuList">
        {laptopItems.map((menuItem, key) => {
          return (
            <MenuItem
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

export default Laptops;
