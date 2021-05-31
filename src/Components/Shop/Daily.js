import '../../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

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
            {Dailys.map(Daily=> 
              
              <div className="item">
                
                {Daily.items.slice(0,1).map(Item=>

                  <div className="item-info"> 
                  <img src={Item.images.icon} className="img-item" />
                  <span> {Item.name} </span>
                  </div>
                )}
                <div className="item-info"> 
                <span> {Daily.finalPrice} </span>
              {/* <span> {Daily.regularPrice}<img src="https://www.hoyfortnite.com/images/skins/V-bucks_1.png" className="v-bucks-img" /> </span>  */}
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