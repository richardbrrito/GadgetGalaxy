import React from 'react'
import "./Header.css"
// import DropdownMenu from './DropdownMenu';
import  {useState} from 'react';

const Header = () => {
    // const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const[open, setOpen] = useState(false);
    return(
            <section className="h-wrapper">
                <div className="h-container">
                    <h1>
                        GadgetGalaxy 
                    </h1>
                    <div className= "search-bar">
                            <input type = "text" placeholder="Search" />
                    </div>
                    {/* ${}is string interpolation and otar bhitore conditional statement */}

                    <div className = "menu-trigger" onClick={()=>{setOpen(!open)}}>
                        <h3 >Products</h3>
                        <div className={`dropdown-menu ${open? 'active' : 'inactive'}` }>
                        <ul>
                            <DropdownItem text = {"Laptop"}/>
                            <DropdownItem text = {"mobile"}/>
                            
                        </ul>

                    </div>
                    </div>
                    
                    <div className="h-menu">
                        <h3>
                            Products
                        </h3>
                        {/* <DropdownMenu options={dropdownOptions} /> */}

                        <h3>
                            Stuffs
                        </h3>
                        <h3>
                            Stuffs
                        </h3>
                        
                    </div>
                </div>
            </section>
    )
}

function DropdownItem(props){
    return(
        <li className='dropdownItem'>
            {/* <img src = {props.img}></img> */}
            <a>{props.text}</a>

        </li>
    );
}
export default Header;