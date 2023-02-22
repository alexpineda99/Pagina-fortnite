import "../../Assets/Css/Main.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import "react-form-input-fields/dist/index.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

function Search() {
  let [cosmeticsall, setCosmeticsall] = useState([]);
  let [search, setSearch] = useState("");
  let [loading, setLoading] = useState(false);
  let [itemload, setItemload] = useState(20);
  let [type, setType] = useState("All");
  const types = [
    { label: "All", value: "All" },
    { label: "Skins", value: "outfit" },
    { label: "Banners", value: "banner" },
    { label: "Wraps", value: "wrap" },
    { label: "Sprays", value: "spray" },
    { label: "Emoji", value: "emoji" },
    { label: "Pickaxe", value: "pickaxe" },
    { label: "Gliders", value: "glider" },
    { label: "Loading screens", value: "loadingscreen" },
    { label: "Emotes", value: "emote" },
  ];
  const url = "https://fortnite-api.com/v2/cosmetics/br";

  function capitalizeFirstLetter(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function handletype(e) {
    setType(e.target.value);
    window.sessionStorage.setItem(
      "searchType",
      JSON.stringify({ searchType: e.target.value })
    );
    
  }

  function handlesearch(e) {
    setSearch(capitalizeFirstLetter(e.target.value));
    window.sessionStorage.setItem(
      "search",
      JSON.stringify({ searchQuery: e.target.value })
    );
    
  }

  function loadmore() {


    if (cosmeticsall.length-itemload < 20) {
      let rest = cosmeticsall.length%itemload;
      setItemload(itemload+rest)
      
    }else {
      setItemload(itemload + 20);
    }

  }

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      // ******************
      if (
        sessionStorage.getItem("search") !== null &&
        sessionStorage.getItem("search") !== ""
      ) {
        let lastSearch = JSON.parse(sessionStorage.getItem("search"));
        setSearch(capitalizeFirstLetter(lastSearch.searchQuery));
      }

      if (
        sessionStorage.getItem("searchType") !== null &&
        sessionStorage.getItem("searchType") !== ""
      ) {
        let lastType = JSON.parse(sessionStorage.getItem("searchType"));
        setType(lastType.searchType);
      }

      // ******************

      if (type) {
        setCosmeticsall(
          res.data.data
            .filter((items) => type === "All" ? items.type.value : items.type.value === type)
            .filter((itemsname) => itemsname.name.includes(search))
        );
      }

      setLoading(false);
    });
  }, [search, type, cosmeticsall.length]);

  return (
    <div className="page-container">
      {/* change main class */}
      <div className="content-wrap">
        <Navbar />
        <h2 className="titulo-p">Search</h2>
        <div className="search-buttons">
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>
                Search by...
              </InputLabel>
              <NativeSelect
                onChange={(e) => handletype(e)}
                defaultValue={type}
                value={type}
              >
                {types.map((type, i) => (
                  <option value={type.value} key={i}>
                    {type.label}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Box>
          <Box >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                id="standard-basic"
                label="Search item..."
                variant="standard"
                value={search}
                onChange={(e) => handlesearch(e)}
                placeholder={'Search item...'}
              />
            </FormControl>
          </Box>
        </div>
        <div className="results-div">
          <span> Results: {cosmeticsall.length} </span>
        </div>
        <div className="main-div-search">
          {loading ? (
            <div className="Loader">
              {" "}
              <Loader type="Rings" color="#109DFA" height={80} width={80} />
            </div>
          ) : (
            cosmeticsall
              .filter((items) => items.type.value)
              .filter((itemsname) => itemsname.name.includes(search)) //filtra los items de acuerdo al valor del input search
              .slice(0, itemload) //mustra los primeros 20 elementos
              .map(
                (
                  item,
                  index //divisiona solo los primeros 25 items del array
                ) => (
                  <Box className="item" key={index}>
                    <div className="item-info">
                      <img
                        src={
                          item.images.icon !== null
                            ? item.images.icon
                            : item.images.smallIcon
                        }
                        className="img-item"
                        alt={item.name}
                      />
                      <div className="text-item-box">
                        <span className="text-item"> {item.name} </span>
                      </div>
                      <Link
                        rel="noopener noreferrer"
                        to={{
                          pathname: `/itemsearch/${item.id}`,
                          state: { props: item },
                        }}
                      >
                        <button className="btn-item">
                          {" "}
                          <span> View Item </span>{" "}
                        </button>
                      </Link>
                    </div>
                  </Box>
                )
              )
          )}
          
        </div>

        <Box sx={{display: "flex", justifyContent: "center"}} mb={2} >

        {cosmeticsall.length < 20 ?
          cosmeticsall.length  + " out of " + cosmeticsall.length + " items" 
          :

         itemload  + " out of " + cosmeticsall.length + " items" 
        }
        </Box>

        <div className="load-buttons">
          <button disabled={cosmeticsall.length <= 20 ? true : false} className="load-items" onClick={loadmore}>
            {" "}
            Show more
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;