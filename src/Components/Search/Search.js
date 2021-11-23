import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import Footer from "../Footer"
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { FormField } from 'react-form-input-fields';
import {
  Link
} from "react-router-dom";
import 'react-form-input-fields/dist/index.css'

function Search() {

    let [cosmeticslength, setCosmeticslength] = useState();
    let [cosmeticsall, setCosmeticsall] = useState([]);
    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false);
    let [itemload, setItemload] = useState(0);
    let [results, setResults] = useState(0);
    let [type, setType] = useState("All");
    const types = ["All", "Skins", "Backpack", "banner", "wrap", "spray", "emoji", "pickaxe", "glider", "loadingscreen", "emote"];
    const url = "https://fortnite-api.com/v2/cosmetics/br";

    function handletype(value) {

      setType(value === "Skins" ? value = "outfit" : value);
      
    }

    function handlesearch(value) {

    function capitalize(value) {
     return value.charAt(0).toUpperCase() + value.slice(1);
    }

    const result = value.split(' ').map(capitalize).join(' ');
    setSearch(result);
    setItemload(25);
    }

    function loadmore () {

      setItemload(itemload+25);


    }

    function loadless () {

      if (itemload >= 26) {

      setItemload(itemload-25);

      }

    }

    useEffect(() =>{
        setLoading(true);
        axios.get(url)
        .then(res => {
        console.log(res.data.data);
        setCosmeticslength(res.data.data.length)
        setCosmeticsall(res.data.data);
        // console.log(type);
        // console.log(search);
        if (type === "All") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)

        } else if (type === "outfit") {

          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "outfit").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)

        } else if (type === "Backpack") {

          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "backpack").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)

        }
        else if (type === "Wrap") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "Banner") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "banner").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "Spray") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "spray").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "Emoji") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "emoji").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "Pickaxe") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "pickaxe").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "Glider") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "glider").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "Loadingscreen") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "loadingscreen").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "Emote") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "emote").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        }
        // else if (search.length > 0) {
        //   setCosmeticsall([]);
        //   setCosmeticslength();
        //   setCosmeticsall(res.data.data.filter(itemsname=> itemsname.name.includes(search)))
        //   setCosmeticslength(cosmeticsall.length)
        // }
        
        setLoading(false);
        })
        }, [search, type, itemload]);

  return (

    <div className="main">
        <Navbar/>
        <h2 className="titulo-p">Search</h2>
        <div className="search-buttons">
          <FormField
          type="select"
          option={types}
          value={type === "outfit" ? "Skins" : type}
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
          <div className="results-div">
            <span> Results: {cosmeticsall.length} </span>
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
          cosmeticsall.filter(type === "All" ? items=> items.type.value.toLowerCase() : items=> items.type.value === type.toLowerCase())
          .filter(itemsname=> itemsname.name.includes(search))
          .slice(0, itemload).map((item, index) => 
            <div className="item" key={index}>
              <div className="item-info"> 
                  <img src={item.images.icon !== null ? item.images.icon : item.images.smallIcon} className="img-item" alt={item.name} />
                  <div className="text-item-box"> 
                    <span className="text-item"> {item.name} </span>
                  </div>
               </div>
                <Link to={{pathname:`/item/${item.id}`, state: {props: item}}} className="link-item">
                  <button className="View-button"> View more </button>
                </Link>
            </div>
            )}
        </div>
        
        <div className="load-buttons"> 
          <button className="load-items" onClick={loadmore}> Show more</button>
          <button className="load-items" onClick={loadless}> Show less</button>
        </div>
        <Footer/>
    </div>
  );
}

export default Search;