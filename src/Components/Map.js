import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Map() {

    let [Map, setMap] = useState("");
    const url = "https://fortnite-api.com/v1/map";

    useEffect(() =>{

        let fetchMap = async () => {
            await axios
              .get(url)
      
              .then((res) => {      

                setMap(res.data.data.images.blank);
   
              });
          };

          fetchMap();
    }, []);

  return (
    <div className="">
        <h2 className="titulo-challenge"> Season's Map </h2>
          <div className="map-div">
            <LazyLoadImage effect='blur' src={Map} width={"90%"} height={"50%"} className="map-image" alt="Seasons map" />
          </div>
    </div>
  );
}

export default Map;