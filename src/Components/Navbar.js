import '../Assets/Css/Main.css';
import { slide as Menu } from 'react-burger-menu'
import React, {useState, useEffect} from 'react';


import {
  BrowserRouter as Router
} from "react-router-dom";

function Navbar() {

  let [isOpen, setisOpen] = useState([]); //Creative
    // let [Loading, setLoading] = useState(false);
    const url = "https://fortnite-api.com/v2/news"

    useEffect(() =>{

        

        }, []);

  return (
    <Router>
    <div>
      <nav>
        {/* <ul>
         <li> <a href="/"> Home </a>  </li>
         <li> <a href="/tienda"> Shop </a> </li>
         <li> <a href="/descripcion"> Busqueda </a> </li>
        </ul> */}
        <Menu disableAutoFocus itemListElement="div">
        <div className="ul-burger">
        <li className="li-burger"> <a href="/"> Home </a>  </li>
        <li className="li-burger"> <a href="/shop"> Shop </a> </li>
        <li className="li-burger"> <a href="/news"> News </a> </li>
        <li className="li-burger"> <a href="/about"> About </a> </li>
        <li className="li-burger"> <a href="/signin"> Sign in </a>  </li>
        <li className="li-burger"> <a href="/signup"> Sign up </a> </li>
        </div>
        </Menu>
        <div className="nav-user">
        <ul className="ul-user">
         <li> <a href="/"> Home </a>  </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/news"> News </a> </li>
         <li> <a href="/about"> About </a> </li>
        </ul>
        <ul className="ul-user">
        <li> <a href="/signin"> Sign in </a>  </li>
        <li> <a href="/signup"> Sign up </a> </li>
        </ul>
        </div> 
        
      </nav>
    </div>

    </Router>
  );
}

export default Navbar;
