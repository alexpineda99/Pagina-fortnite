import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import Footer from "../Footer"
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { FormField } from 'react-form-input-fields'
import 'react-form-input-fields/dist/index.css'
// import Carousel from 'react-elastic-carousel';

function Search() {

    //cosmetic´s variants
    let [cosmeticslength, setCosmeticslength] = useState();
    let [cosmeticsall, setCosmeticsall] = useState([]);
    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false);
    let [itemload, setItemload] = useState(25);
    let [type, setType] = useState("All");
    const types = ["All", "outfit", "banner", "wrap", "spray", "emoji", "pickaxe", "glider", "loadingscreen", "emote"];
    const url = "https://fortnite-api.com/v2/cosmetics/br";

    function handletype(value) {
      setType(value);
    }

    function handlesearch(value) {
      setSearch(value);
    }

    function loadmore () {
      setItemload(itemload+25)
      if (itemload%25 == 0) {

      } else {
        alert("no more")
      }
    }

    useEffect(() =>{
        setLoading(true);
        axios.get(url)
        .then(res => {
        console.log(res.data.data);
        setCosmeticslength(res.data.data.length)
        setCosmeticsall(res.data.data);
        console.log(type);
        console.log(search);

        if (type === "outfit") {

          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "outfit"))
          setCosmeticslength(cosmeticsall.length)

        } else if (type === "wrap") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "banner") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "banner"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "spray") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "spray"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "emoji") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "emoji"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "pickaxe") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "pickaxe"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "glider") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "glider"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "loadingscreen") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "loadingscreen"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "emote") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "emote"))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (search.length > 0) {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        }

          
        setLoading(false);
        })

        }, [search, type]);

  return (

    <div className="main">
        <Navbar/>
        <h2 className="titulo-p">Search</h2>
        <div className="search-buttons">
          <FormField
          type="select"
          option={types}
          value={type}
          label={'Search by...'}
          keys={"type"}
          handleOnChange={(value) => handletype(value)} />
          <FormField
          type={"text"}
          standard="labeleffect"
          value={search}
          keys={'search'}
          effect={'effect_3'}
          handleOnChange={(value) => handlesearch(value)}
          placeholder={'Search item...'} />
          </div>
        <div className="main-div-search">
            {loading ? <div className="Loader"> <Loader 
            type="Rings" 
            color="#109DFA" 
            height={80} 
            width={80} 
          />
          </div>
          :
          cosmeticsall.filter(type === "All" ? items=> items.type.value : items=> items.type.value === type)
          .filter(itemsname=> itemsname.name.includes(search)).slice(0, itemload).map((item, index) => 
            <div className="item" key={index}>
              <div className="item-info"> 
                  <img src={item.images.icon !== null ? item.images.icon : item.images.smallIcon} className="img-item" alt={item.name} />
                  <div className="text-item-box"> 
                    <span className="text-item"> {item.name} </span>
                  </div>
               </div>
            </div>
            )}
        </div>
        <button onClick={loadmore}> load more</button>
        <button onClick={loadmore}> load less</button>
        <Footer/>
    </div>
  );
}

export default Search;


//             {
//            cosmeticsall.slice(0,cosmeticsall).filter(type === "All" ? items=> items.type.value : items=> items.type.value === type).filter(itemsname=> itemsname.name.includes(search)).map((item, index) => 
//             <div className="item" key={index}>
//               <div className="item-info" key={index}> 
//                   <img src={item.images.icon} className="img-item" alt={item.name} />
//                   <div className="text-item-box"> 
//                     <span className="text-item"> {item.name} </span>
//                   </div>
//                </div>
//             </div>
//             )}
