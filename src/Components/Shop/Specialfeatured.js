import React, {useState, useEffect} from 'react';
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Loader from "react-loader-spinner";
import ContentUnavailable from '../Pages/ContentUnavailable';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
        setName("Special Featured");
        let fetchDaily = async () =>{
        await axios.get(url)
        .then(res => {

        setSpecialfeatured(res.data.data.specialFeatured.entries);
        
        console.log(Specialfeatured);

        // console.log(Specialfeatured);

        console.log(window.pageYOffset)

        // console.log(Dailys.slice(0,1));
        setLoading(false);

      })
      .catch(error=> {
        console.log(error)
        setLoading(null);
        console.log(Specialfeatured);
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
            {Loading  ?
            <Loader 
            type="Rings" 
            color="#109DFA" 
            height={80} 
            width={80} 
          />
        :

        Loading === null ?
        <ContentUnavailable/>
        :

          <div className="main-all"> 
            {Specialfeatures.map((Feature, index)=> 
              
              <div className="item" key={index}>
                
                {Feature.items.slice(0,1).map((Item, index)=>

                  <div className="item-info" key={index}> 
                  <LazyLoadImage effect='blur' src={Item.images.icon} className="img-item" width={"100%"} height={"90%"} alt={Item.name} />
                  <div className="text-item-box"> 
                    <span className="text-item"> {Item.name} </span>
                  </div>
                  
                  </div>
                )}
                <div className="item-info"> 
                <div className="item-price"> 
                  <span> {Feature.finalPrice}</span> &nbsp;  <LazyLoadImage effect='blur' src={VBucks} width={"1.3rem"} height={"1.3rem"} alt="v-bucks price" />
                </div>
                <Link to={{pathname:`/item/${Feature.items[0].id}`, state: {props: Feature}}}>
                  <button className="btn-item"> <span> View Item </span> </button>
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