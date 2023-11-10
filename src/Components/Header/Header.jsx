import React from "react";
import "./Header.css";
// import DropdownMenu from './DropdownMenu';
import { useState } from "react";
import { Link } from 'react-router-dom';
import productData from "../../utils/MenuList.json"
import SearchIcon from "@mui/icons-material/Search"
import logo from '../../assets/gg_Logo.png';
import { ShoppingCart } from "phosphor-react";

const Header = () => {
  // const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const [open, setOpen] = useState(false);
  return (
    <section className="h-wrapper">
      <div className="h-container">
      <Link to="/">
          <img src={logo} 
          aria-label=""  
          style={{ width: '50px', height: '50px' }}/>
          <h1 className="primaryText">GadgetGalaxy</h1>
      </Link>
      <SearchBar placeholder="Search a product" data={productData}/>
        {/* ${}is string interpolation and otar bhitore conditional statement */}

        <div className="h-menu ">
          {/* <DropdownMenu options={dropdownOptions} /> */}
          <div className="menu-trigger" onClick={() => setOpen(!open)}>
            <h3>Products</h3>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <Link to="/products"><DropdownItem text={"Products"} /></Link>
                <Link to="/laptops"><DropdownItem text={"Laptop"} /> </Link>
                <Link to="/phones"><DropdownItem text={"Phones"} /> </Link>
                <Link to="/accessories"><DropdownItem text={"Accessories"} /> </Link>
              </ul>
            </div>
          </div>

          <h3>Contact Us</h3>
          <Link to="/cart"><ShoppingCart size={21}/></Link>
        </div>
      </div>
    </section>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      {/* <img src = {props.img}></img> */}
      {props.text}
    </li>
  );
}

function SearchBar({placeholder, data}) {
  const [filteredSearch, setFilteredSearch] = useState([])

  const handleFilter = (event) =>{
    // handleFilter is turned into an eventlistener, which takes in
    // the value of the input (searchWord) and compares it all the names in the menulist.json
    // then returns the ones that have the same letters
    const searchWord = event.target.value
    const newFilter = data.filter((value)=>{
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    })
    if (searchWord === ""){
      setFilteredSearch([])
    } else{
      setFilteredSearch(newFilter)
    }
    
  }
  /*Result when calling the searchbar function*/
  return (
    <div className="search">
      <div className="searchInput">
        {/*Onchange event listener which detects when something is changed in the input, then as a result it calls handleFilter*/}
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
        <a className="searchIcon" href="/products">
          <SearchIcon/>
        </a>
      </div>
      {/* if the input is not 0, then we display all the products (searchResult)*/}
      {filteredSearch.length != 0 &&
        <div className="searchResult">
          {filteredSearch.slice(0,8).map((value, key) =>{
            return <a className="dataItem" href={value.Page}> 
              <p>
                {value.name}
              </p>
            </a>
          })}
        </div>
      }
    </div>
  )
}
export default Header;