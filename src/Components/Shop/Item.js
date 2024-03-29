import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Arrowback from "../../Assets/Images/arrow.png";
import Navbar from "../Navbar";
import Grid from "@mui/material/Grid";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from "../Footer";
import axios from "axios";
import { Box } from "@mui/system";
const token = localStorage.getItem("user");

function Item(props) {
  let [Features, setFeatures] = useState(props.history.location.state.props);
  let [Itemlength, setItemlength] = useState(Features);
  let history = useHistory();
  const { pathname } = useLocation();
  const { id } = useParams();

  const goToPreviousPath = () => {
    history.goBack();
  };

  function capitalizeFirstLetter(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    console.log(Itemlength);
    axios
      .get(`https://fortnite-api.com/v2/cosmetics/br/${id}`)
      // axios.get(`/item/${id}`)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        // window.location.href = "/signin";
      });
    window.scrollTo(0, 0);
  }, [pathname]);

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 1 100%"
          }}
        >
          {Features.items.slice(0, 1).map((item) => (
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
              <h1 className="item-name">{item.name} </h1>
              <LazyLoadImage
              effect="blur"
                src={item.images.icon}
                className="item-image"
                height={"80%"}
                width={"60%"}
                alt={item.name}
              />
            </Box>
          ))}
          <Box>
            <Box sx={{display: "flex", justifyContent: "center" ,fontSize: "1.4rem"}}> {Features.finalPrice} 
            <img
              // effect='blur'
              src={VBucks}
              className="v-bucks-img"
              alt="v-bucks price"
            />
            </Box>
            <Box sx={{fontSize: "1.4rem"}}> Additional items </Box>
          </Box>
        </Box>
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: "100%",
          }}
        >
          {Itemlength.items.length === 1 ? (
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.2rem",
              }}
            >
              {" "}
              Not included{" "}
            </Grid>
          ) : (
            Features.items.slice(1, Itemlength.items.length).map((item) => (
              <Grid
                lg={3}
                md={3}
                sm={3}
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  sx={{ width: "50%", marginBottom: "-1%" }}
                  src={item.images.icon}
                  alt={item.name}
                />

                {/* <img
                      width={"70%"}
                      src={item.images.icon}
                      alt={item.name}
                    /> */}
                <Box sx={{fontSize: ".9rem"}}>
                  {" "}
                  {item.name} - {capitalizeFirstLetter(item.type.value)}{" "}
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </div>

      {/* {Itemlength.shopHistory[0]} */}
      <Footer />
    </div>
  );
}

export default Item;
