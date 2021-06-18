import '../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Map() {

    let [Map, setMap] = useState("");
    const url = "https://fortnite-api.com/v1/map";

    useEffect(() =>{

        let fetchMap = async () => {
            await axios
              .get(url)
      
              .then((res) => {
      
                // console.log(res.data.data.daily.entries);
                
                console.log(res.data.data.images.pois);

                setMap(res.data.data.images.pois);
      
                // console.log(Dailys.slice(0,1));
              });
          };

          fetchMap();
        //   console.log(Challenges);
    }, []);

  return (
    <div className="main">
        <h2 className="titulo-challenge"> Season´s Map </h2>
          <div className="map-div">
            <img src={Map} className="map-image" />
          </div>
    </div>
  );
}

export default Map;