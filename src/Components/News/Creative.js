import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SmartCard from "react-smart-card";

function Creative() {
  let [Creatives, setCreatives] = useState([]); //Creative
  // let [Loading, setLoading] = useState(false);
  const url = "https://fortnite-api.com/v2/news";

  useEffect(() => {
    // setLoading(true);
    let News = async () => {
      await axios.get(url).then((res) => {
        setCreatives(res.data.data.creative);
        console.log(res.data.data.creative);
        // console.log(res.data.data.br.motds);
        // setLoading(false);
      });
    };

    News();
  }, []);

  return (
    <div className="main-creative-div">
      <h3 className="news-text"> Creative </h3>

      {!Creative ? (
        <div>
          {Creatives.map((Creative) => (
            <div className="creative-div">
              <SmartCard
                imgSrc={Creative.image}
                title={Creative.title}
                des={Creative.body}
                titleColor="orange"
                desColor="red"
              />
              {/* <img src={Creative.image} className="item-image" />
                <p> {Creative.title} </p>
                <div className="creative-div-des"> 
                  
                </div> */}
            </div>
          ))}
        </div>
      ) : (
        <span className="info-news"> No creative´s news availables</span>
      )}
    </div>
  );
}

export default Creative;
