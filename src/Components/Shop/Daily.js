import '../../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import {
  Link
} from "react-router-dom";

function Daily() {
 
    let [Dailys, setDailys] = useState([]);
    let [Name, setName] = useState("");
    let [Loading, setLoading] = useState(false);
    const url = "https://fortnite-api.com/v2/shop/br"

    useEffect(() =>{

       setLoading(true);
        let fetchDaily = async () =>{
        await axios.get(url)
        .then(res => {

        setDailys(res.data.data.daily.entries);
        
        // console.log(res.data.data.daily.entries);

        console.log(res.data.data);

        setName(res.data.data.daily.name);

        // console.log(Dailys.slice(0,1));
        setLoading(false);
      })

    }

    fetchDaily();
        }, []);

  return (
    <div>
      <h2 className="titulo-p"> {Name} </h2>
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
          <div className="main-daily"> 
            {Dailys.map((Daily, index)=> 
              
              <div className="item" key={index}>
                
                {Daily.items.slice(0,1).map((Item, index)=>

                  <div className="item-info" key={index}> 
                  <img src={Item.images.icon} className="img-item" />
                  <div className="text-item-box"> 
                    <span className="text-item"> {Item.name} </span>
                  </div>
                  </div>
                )}
                <div className="item-info"> 
                <span> {Daily.finalPrice} </span>
                <Link to={{pathname:'/item', state: {props: Daily}}}>
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







// {Dailys.map(Daily => (

//   <div className="item"> 
//   {/* {Daily.items.images.map(image =>

//       <span> {image.icon} </span>

//   )} */}
//       <span> {Daily.name} </span> 

//   </div>
// ))}


// old

{/* {Dailys.map(Daily => (

            <div className="item">  */}
            {/* {Daily.items.images.map(image =>

                <span> {image.icon} </span>

            )} */}

            {/* {Daily.items.map((item,index) => 
                
                <span>{item.name}</span>
                
    
            )} */}
                {/* <span> {Daily.name} </span> 
            </div>
        ))} */}