import '../Assets/Css/Main.css';
import { slide as Menu } from 'react-burger-menu'
import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router
} from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem('user');
  const user = useSelector((state)=>state.User)
  const dispatch = useDispatch();
  const {logOutUser} = bindActionCreators(actionCreators, dispatch)
  const signout = () => {
    logOutUser();
    localStorage.removeItem("user");
    window.location.href="/";
  }
    

  return (
    <Router>
    <div>
      <nav>
        <Menu disableAutoFocus itemListElement="div">
        <div className="ul-burger">
        {token ?
        <div>         
          <li className="li-burger"> <a href="/"> Home </a>  </li>
          <li className="li-burger"> <a href="/shop"> Shop </a> </li>
          <li className="li-burger"> <a href="/news"> News </a> </li>
          <li className="li-burger"> <a href="/search"> Search </a> </li>
          <li className="li-burger"> <a href="/about"> About </a> </li>
          <li> <span className="signout" onClick={() =>signout()}> Sign out </span> </li>
        </div>
      :
        <div>         
          <li className="li-burger"> <a href="/"> Home </a>  </li>
          <li className="li-burger"> <a href="/shop"> Shop </a> </li>
          <li className="li-burger"> <a href="/news"> News </a> </li>
          <li className="li-burger"> <a href="/search"> Search </a> </li>
          <li className="li-burger"> <a href="/about"> About </a> </li>
          {/* <li className="li-burger"> <a href="/signin"> Sign in </a>  </li>
          <li className="li-burger"> <a href="/signup"> Sign up </a> </li> */}
        </div>
      }
        </div>
        </Menu>


          {token ? 
        <div className="nav-user">
        <ul className="ul-user">
         <li> <a href="/"> Home </a>  </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/news"> News </a> </li>
         <li> <a href="/search"> Search </a> </li>
         <li> <a href="/about"> About </a> </li>
        </ul>
        <ul className="ul-user">
        <li> <span className="signout" onClick={() =>signout()}> Sign out </span> </li>
        </ul>
        </div>
        :
        <div className="nav-user">
        <ul className="ul-user">
         <li> <a href="/"> Home </a>  </li>
         <li> <a href="/shop"> Shop </a> </li>
         <li> <a href="/news"> News </a> </li>
         <li> <a href="/search"> Search </a> </li>
         <li> <a href="/about"> About </a> </li>
        </ul>
        <ul className="ul-user">
        {/* <li> <a href="/signin"> Sign in </a>  </li>
        <li> <a href="/signup"> Sign up </a> </li> */}
        </ul>
        </div>
        }
        
      </nav>
    </div>

    </Router>
  );
}

export default Navbar;
