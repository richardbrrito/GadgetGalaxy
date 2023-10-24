import React from 'react';
import { MenuList } from '../utils/MenuList';
import MenuItem from '../Components/Products/MenuItem';
import '../Components/Products/Menu.css';

function Laptops() {
  const accItems = MenuList.filter(menuItem => menuItem.type === 'Assc');
  return (
    <div className="menu">
      <h1 className="menuTitle">Accessories</h1>

      <div className="menuList">
        {accItems.map((menuItem, key) => {
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
