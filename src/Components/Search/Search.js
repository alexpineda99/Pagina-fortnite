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
    let [cosmeticsoutfit, setCosmeticsoutfit] = useState([]);
    let [cosmeticswraps, setCosmeticswraps] = useState([]);
    let [cosmeticsbanner, setCosmeticsbanner] = useState([]);
    let [cosmeticsspray, setCosmeticsspray] = useState([]);
    let [cosmeticsemoji, setCosmeticsemoji] = useState([]);
    let [cosmeticspickaxe, setCosmeticspickaxe] = useState([]);
    let [cosmeticsglider, setCosmeticsglider] = useState([]);
    let [cosmeticsloadingscreen, setCosmeticsloadingscreen] = useState([]);
    let [cosmeticsemote, setCosmeticsemote] = useState([]);
    

    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false);
    let [itemload, setItemload] = useState(25);
    let [type, setType] = useState("All");
    const types = ["All", "outfit", "banner", "wrap", "spray", "emoji", "pickaxe", "glider", "loadingscreen", "emote"];
    const url = "https://fortnite-api.com/v2/cosmetics/br";

    function handletype(value) {
      setType(value);
      console.log(value);

    }

    function handlesearch(value) {
      setSearch(value);
      console.log(value);
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
        // setType("All");
        axios.get(url)
        .then(res => {
        console.log(res.data.data);
        setCosmeticslength(res.data.data.length)
        // setCosmeticsall(res.data.data);
        console.log(type);
        console.log(search);

        if (type === "outfit") {

          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "outfit"))

        } else if (type === "wrap") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        } else if (type === "banner") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        } else if (type === "spray") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        } else if (type === "emoji") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        } else if (type === "pickaxe") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        } else if (type === "glider") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        } else if (type === "loadingscreen") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        } else if (type === "emote") {
          setCosmeticsall([]);
          setCosmeticsall(res.data.data.filter(items=>items.type.value === "wrap"))
        
        }

        // res.data.data.filter(items=>items.type.value === "outfit").forEach(val=>{
        //   cosmeticsoutfit.push(val);
        // })
        // console.log(cosmeticsoutfit);

        // res.data.data.filter(items=>items.type.value === "wrap").forEach(val=>{
        //   cosmeticswraps.push(val);
        // })
        // console.log(cosmeticswraps);

        // res.data.data.filter(items=>items.type.value === "banner").forEach(val=>{
        //   cosmeticsbanner.push(val);
        // })
        //   console.log(cosmeticsbanner);
        // res.data.data.filter(items=>items.type.value === "spray").forEach(val=>{
        //     cosmeticsspray.push(val);
        // })
        //   console.log(cosmeticsspray);
        // res.data.data.filter(items=>items.type.value === "emoji").forEach(val=>{
        //   cosmeticsemoji.push(val);
        // })
        //   console.log(cosmeticsemoji);
        // res.data.data.filter(items=>items.type.value === "pickaxe").forEach(val=>{
        //   cosmeticspickaxe.push(val);
        // })
        //   console.log(cosmeticspickaxe);
        // res.data.data.filter(items=>items.type.value === "glider").forEach(val=>{
        //   cosmeticsglider.push(val);
        // })
        //   console.log(cosmeticsglider);
        // res.data.data.filter(items=>items.type.value === "loadingscreen").forEach(val=>{
        //   cosmeticsloadingscreen.push(val);
        // })
        //   console.log(cosmeticsloadingscreen);
        // res.data.data.filter(items=>items.type.value === "emote").forEach(val=>{
        //   cosmeticsemote.push(val);
        // })
        //   console.log(cosmeticsemote);
          
        setLoading(false);
        })

        // alert(type==="All" ? cosmeticsall.length : type === "outfit" ? cosmeticsoutfit.length : type === "banner" ? 
        // cosmeticsbanner.length : type === "wrap" ? cosmeticswraps.length : type === "spay" ? cosmeticsspray.length : type === "emoji" ? cosmeticsemoji.length
        // : type === "pickaxe" ? cosmeticspickaxe.length : type === "glider" ? cosmeticsglider.length : type === "loadingscreen" ? cosmeticsloadingscreen.length
        // : cosmeticsemote.length
        // )
        console.log(cosmeticsall);
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
          placeholder={'Enter pass'} />
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
          cosmeticsall.slice(0, 25).filter(type === "All" ? items=> items.type.value : items=> items.type.value === type)
          .filter(itemsname=> itemsname.name.includes(search)).map((item, index) => 
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
