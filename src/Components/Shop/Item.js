import "../../Assets/Css/Main.css"
import React, {useState, useEffect} from 'react';
import Navbar from "../Navbar"

function Item(props) {
 
    console.log(props);
    useEffect(() =>{

        
        }, []);

  return (
            <div className="main">
            <Navbar/>
                <span> Item </span>

            </div>
  );
}

export default Item;