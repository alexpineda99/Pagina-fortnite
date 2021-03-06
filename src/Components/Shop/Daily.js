import '../../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import VBucks from "../../Assets/Images/V-bucks_1.png";
import axios from 'axios';
import Loader from "react-loader-spinner";
import {
  Link
} from "react-router-dom";

function Daily() {
 
    let [Dailys, setDailys] = useState([]);
    let [Name, setName] = useState("");
    let [Loading, setLoading] = useState(false);
    const token = localStorage.getItem('user');
    const url = "https://fortnite-api.com/v2/shop/br"

    useEffect(() =>{

       setLoading(true);
        let fetchDaily = async () =>{
        await axios.get(url)
        .then(res => {

        setDailys(res.data.data.daily.entries);
        
        // console.log(res.data.data.daily.entries);

        // console.log(res.data.data);

        setName("Daily");

        // console.log(res.headers);
        console.log(window.pageYOffset)
        // console.log(Dailys.slice(0,1));
        setLoading(false);
      })

    }

    fetchDaily();
        }, []);

  return (
    <div>
      <h2 className="titulo-p"> {Name}  </h2>
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
            {Dailys.map((Daily, index)=> 
              
              <div className="item" key={index}>
                
                {Daily.items.slice(0,1).map((Item, index)=>

                  <div className="item-info" key={index}> 
                  <img src={Item.images.icon} className="img-item" alt={Item.name} />
                  <div className="text-item-box"> 
                    <span className="text-item"> {Item.name} </span>
                  </div>
                  </div>
                )}
                <div className="item-info"> 
                <div className="item-price"> 
                  <span> {Daily.finalPrice} </span> &nbsp;  <img src={VBucks} className="v-bucks-img" alt="v-bucks price" />
                </div>
                <Link to={{pathname:`/item/${Daily.items[0].id}`, state: {props: Daily}}}>
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

export default Daily;