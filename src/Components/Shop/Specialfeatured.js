import '../../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Loader from "react-loader-spinner";
import axios from 'axios';
import {
  Link
} from "react-router-dom";

function Specialfeatured() {
 
    let [Specialfeatures, setSpecialfeatured] = useState([]);
    let [Name, setName] = useState("");
    let [Loading, setLoading] = useState(false);
    const url = "https://fortnite-api.com/v2/shop/br"

    useEffect(() =>{
        setLoading(true);
        let fetchDaily = async () =>{
        await axios.get(url)
        .then(res => {

        setSpecialfeatured(res.data.data.specialFeatured.entries);
        
        // console.log(res.data.data.daily.entries);

        // console.log(res.data.data);

        setName("SPECIAL FEATURED");

        console.log(window.pageYOffset)

        // console.log(Dailys.slice(0,1));
        setLoading(false);

      })

    }

    fetchDaily();
        }, []);

  return (
    <div>
        <div className="title-specialfeatured">
         <h2 className="titulo-p"> {Name} </h2>
        </div>
        <div className="Loader">
            {Loading ?  <Loader 
          type="Rings" 
          color="#109DFA" 
          height={80} 
          width={80} 
        /* #109DFA */
        /* #024A86 */
        /* #E69DFB */
        /* #FF689D*/
        /* #222222 */
        />
        :
          <div className="main-all"> 
            {Specialfeatures.map((Feature, index)=> 
              
              <div className="item" key={index}>
                
                {Feature.items.slice(0,1).map((Item, index)=>

                  <div className="item-info" key={index}> 
                  <img src={Item.images.icon} className="img-item" />
                  <div className="text-item-box"> 
                    <span className="text-item"> {Item.name} </span>
                  </div>
                  
                  </div>
                )}
                <div className="item-info"> 
                <div className="item-price"> 
                  <span> {Feature.finalPrice}</span> &nbsp;  <img src={VBucks} className="v-bucks-img" />
                </div>
                <Link to={{pathname:`/item/${Feature.items[0].id}`, state: {props: Feature}}}>
                  <button className="View-button"> View more </button>
                </Link>
              </div>
              </div>
              )}
                
          </div>
        }
        </div>
    </div>
  );
}

export default Specialfeatured;