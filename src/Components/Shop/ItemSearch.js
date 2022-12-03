import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Arrowback from "../../Assets/Images/arrow.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import moment from "moment";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Loader from 'react-loader-spinner';
import Grid from "@mui/material/Grid";

function Item() {
  let history = useHistory();
  let [itemProperties, setitemProperties] = useState();
  let [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const { id } = useParams();

  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    // console.log(itemProperties);
    setLoading(true);
    const getiteminfo = async () => {
      const url = `https://fortnite-api.com/v2/cosmetics/br/${id}`;
      const result = await axios.get(url);

      console.log(result.data.data);
      setitemProperties(result.data.data);
      setLoading(false);
    } 

    getiteminfo();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      {/* change main class */}
      <Navbar />
      <div className="arrow-back-div">
        <img
          src={Arrowback}
          className="arrow-back"
          onClick={goToPreviousPath}
          alt="arrowback"
        />
      </div>
      <div className="content-wrap">
      {loading ? <div className="Loader"> <Loader 
          type="Rings" 
          color="#109DFA" 
          height={80} 
          width={80} 
        /* #109DFA */
        /* #024A86 */
        /* #E69DFB */
        /* #FF689D*/
        /* #222222 */
        /> </div> : 
        <div className="optional-content-wrap">
          <div className="main-div-item">
            <div className="item-info">
              <h1 className="item-name">{itemProperties?.name} </h1>
              <img
                src={itemProperties?.images.icon}
                className="item-image"
                alt={itemProperties?.name}
              />
            </div>
          </div>
          <div className="additional-name"> Item info </div>
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              spacing={0}
              justifyContent={"center"}
              textAlign={"center"}
              rowSpacing={0}
              mt={5}
              justifyItems="center"
            >
              <Grid item xs={6}>
                {itemProperties?.shopHistory !== null
                  ? itemProperties?.shopHistory.slice(0, 5).map((history) => (
                      <div>{moment(history).utc().format('YYYY-MM-DD hh:mm:ss')} - UTC</div>
                    ))
                  : `Battle pass item ${itemProperties?.introduction.text}`}
              </Grid>
              <Grid item xs={6}>
                <p>Rarity: {itemProperties?.rarity.displayValue}</p>
                <p>Description: {itemProperties?.description} </p>
              </Grid>
              <Grid item xs={12}>
                <h2>Variants</h2>
                {itemProperties?.variants !== null ? itemProperties?.variants.map(variant =>
                  
                  <span>{variant.channel}</span>

                  ) : <span> This item has no variants </span>}
              </Grid>
            </Grid>
          </Box>
        </div>
        }

      </div>

      {/* {Itemlength.shopHistory[0]} */}
      <Footer />
    </div>
  );
}

export default Item;
