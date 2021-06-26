import "../../Assets/Css/Main.css"
import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom"
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Navbar from "../Navbar"

function Item(props) {
 
    // console.log(props.history.location.state.props);
    let [Features, setFeatures] = useState(props.history.location.state.props);
    let [Itemlength, setItemlength] = useState(Features.items.length);
    let history = useHistory();

    const goToPreviousPath = () =>{
        history.goBack();
    }

    console.log(Features);
    console.log(Itemlength);
    useEffect(() =>{
        
        
        }, []);

  return (
            <div className="main">
            <Navbar/>
                    <div className="main-div-item">
                        {Features.items.slice(0,1).map(item => 
                            <div className="item-info"> 
                                <h1 className="item-name"> {item.name} </h1> 
                                <img src={item.images.icon} className="item-image" />
                            </div>
                            )}

                                   
                    </div>
                    <div className="item-price"> 
                        <span> {Features.finalPrice} </span> &nbsp;  <img src={VBucks} className="v-bucks-img-item" />
                    </div>
                    <span className="additional-name"> Additional items:  </span>
                    <div className="main-additional-item">
                        
                        {Itemlength === 1 ?

                        <span className="additional-name"> No </span>
                            
                        :
                        
                        Features.items.slice(1,Itemlength).map(item=>

                                <div className="additional-item">
                                    <h1 className="additional-item-name"> {item.name} </h1> 
                                    <img src={item.images.icon} className="additional-item-image" />
                                </div>
                            )

                        

                        } 
                        </div>
                    

            </div>
  );
}

export default Item;