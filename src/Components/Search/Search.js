import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import Footer from "../Footer"
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { FormField } from 'react-form-input-fields'
import 'react-form-input-fields/dist/index.css'
import {
  Link
} from "react-router-dom";
// import Carousel from 'react-elastic-carousel';

function Search() {

  // const {searchQuery,searchResults} = JSON.parse(window.sessionStorage.getItem("searchDetails"));

    let [cosmeticslength, setCosmeticslength] = useState();
    let [cosmeticsall, setCosmeticsall] = useState([]);
    let [Dailys, setDailys] = useState([]);
    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false);
    let [itemload, setItemload] = useState(20);
    let [results, setResults] = useState(0);
    let [typeshowed, setTypeshowed] = useState({ label: "All", value: "All" });
    let [type, setType] = useState({ label: "All", value: "All" });
    const types = [{ label:  'All', value:  "All" },
    { label:  'Skins', value:  "outfit" },
    { label:  'Banners', value:  "banner" },
    { label:  'Wraps', value:  "wrap" },
    { label:  'Sprays', value:  "spray" },
    {label: "Emoji", value:"emoji"},
    {label: "Pickaxe", value:"pickaxe"},
    {label: "Gliders", value:"glider"},
    {label: "Loading screens", value:"loadingscreen"},
    {label: "Emotes", value:"emote"}
  ];
    const url = "https://fortnite-api.com/v2/cosmetics/br";

    function capitalizeFirstLetter(str) {
      return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    }

    function handletype(e) {
      const selected = types.filter((type) => type.value === e)[0]
      console.log(selected);
      setTypeshowed(selected.label);
      setType(selected.value);
      
    }

    function handlesearch(value) {
      setSearch(capitalizeFirstLetter(value));
      window.sessionStorage.setItem("searchDetails",JSON.stringify({searchQuery:value, searchType:type}))
      console.log(window.sessionStorage.getItem("searchDetails"));
    }

    function loadmore () {
      if (itemload%20 === 0) {

        setItemload(itemload+20);

      } else {
        alert("There are not more items to load.")
      }
    }

    function loadless () {
      if (itemload%20 === 0 && itemload > 20) {

        setItemload(itemload-20)

      } else if (itemload === 20) {

        
      }
      else if (itemload%20 !== 0) {

        alert("no more" + itemload%20)
      }
    }

    useEffect(() =>{
        setLoading(true);
        axios.get(url)
        .then(res => {
        // setCosmeticslength(res.data.data.length);
        setCosmeticsall(res.data.data);
        console.log(cosmeticsall.length);
        // console.log(type);
        // console.log(search);

        if (type === "outfit") {

          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "outfit").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length);

        } else if (type === "wrap") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "banner") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "banner").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "spray") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "spray").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "emoji") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "emoji").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "pickaxe") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "pickaxe").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "glider") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "glider").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "loadingscreen") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "loadingscreen").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } else if (type === "emote") {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "emote").filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        
        } 
        else if (search.length > 0) {
          setCosmeticsall([]);
          setCosmeticslength();
          setCosmeticsall(res.data.data.filter(itemsname=> itemsname.name.includes(search)))
          setCosmeticslength(cosmeticsall.length)
        }

        console.log(cosmeticslength);
        
        setLoading(false);
        })
        }, [search, type]);

  return (

    <div className="page-container">
      {/* change main class */}
      <div className="content-wrap">
        <Navbar/>
        <h2 className="titulo-p">Search</h2>
        <div className="search-buttons">
          <FormField
          type="select"
          option={types}
          value={typeshowed}
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
          cosmeticsall.filter(type.label === "All" ? items=> items.type.value : items=> items.type.value === type)
          .filter(itemsname=> itemsname.name.includes(search)) //filtra los items de acuerdo al valor del input search
          .slice(0, itemload).map((item, index) => //divisiona solo los primeros 25 items del array
            <div className="item" key={index}>
              <div className="item-info"> 
                  <img src={item.images.icon !== null ? item.images.icon : item.images.smallIcon} className="img-item" alt={item.name} />
                  <div className="text-item-box"> 
                    <span className="text-item"> {item.name} </span>
                  </div>
                  <Link rel="noopener noreferrer" target={"_blank"} to={{pathname:`/itemsearch/${item.id}`, state: {props: item}}}>
                    <button className="View-button"> View more </button>

                </Link>
               </div>
            </div>
            )}
        </div>
        
        {console.log(cosmeticsall.length)}
        <div className="load-buttons"> 
          <button className="load-items" onClick={loadmore}> Show more</button>
          <button className="load-items" onClick={loadless}> Show less</button>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Search;