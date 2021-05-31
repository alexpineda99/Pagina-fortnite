import '../Assets/Css/Main.css';
import { slide as Menu } from 'react-burger-menu'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MenuBurger() {

  let [isOpen, setisOpen] = useState([]); //Creative
    // let [Loading, setLoading] = useState(false);
    const url = "https://fortnite-api.com/v2/news"

    useEffect(() =>{

        setisOpen(true);

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
        <Menu isOpen={isOpen} pageWrapId={"menu-burger"}>
        <ul className="ul-user" id="menu-burger">
         <li> <a href="/"> Home </a>  </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/news"> News </a> </li>
         <li> <a href="/about"> About </a> </li>
        </ul>
        <ul className="ul-user">
        <li> <a href="/"> Iniciar sesion </a>  </li>
        <li> <a href="/"> Cerrar sesion </a> </li>
        </ul>
        </Menu>
      </nav>
    </div>

    </Router>
  );
}

export default MenuBurger;
