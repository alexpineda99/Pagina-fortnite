import '../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Daily() {
 
    let [Dailys, setDailys] = useState([]);
    const url = "https://fortnite-api.com/v2/shop/br"

    useEffect(() =>{

        let fetchDaily = async () =>{
        await axios.get(url)
        .then(res => {

        setDailys(res.data.data.daily.entries);
        
        console.log(res.data.data.daily.entries);

        // console.log(Dailys.slice(0,1));

      })

    }

    fetchDaily();
        }, []);

  return (
    <div>
        <div>
          <div className="main-daily"> 
            {Dailys.map(Daily=> 
              
              <div className="item">
                
                {Daily.items.slice(0,1).map(Item=>

                  <div> 
                  <img src={Item.images.icon} className="img-item" />
                  <span> {Item.name} </span>
                  </div>
                )}
              <span> {Daily.regularPrice} - V </span>
              
              </div>
              )}
              
          </div>
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