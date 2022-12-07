import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Arrowback from "../../Assets/Images/arrow.png";
import Navbar from "../Navbar";
import Grid from "@mui/material/Grid";
import Footer from "../Footer";
import axios from "axios";
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
        <div className="optional-content-wrap">
          <div className="main-div-item">
            {Features.items.slice(0, 1).map((item) => (
              <div className="item-info">
                <h1 className="item-name">{item.name} </h1>
                <img
                  src={item.images.icon}
                  className="item-image"
                  alt={item.name}
                />
              </div>
            ))}
          </div>
          <div className="item-price">
            <span> {Features.finalPrice} </span> &nbsp;{" "}
            <img
              src={VBucks}
              className="v-bucks-img-item"
              alt="v-bucks price"
            />
          </div>
          <div className="additional-name"> Additional items </div>
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
              {Itemlength.items.length === 1 ? (
                <span> Not included </span>
              ) : (
                Features.items.slice(1, Itemlength.items.length).map((item) => (
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      alignContent: "center"
                    }}
                  >
                    <img
                    width={"25%"}
                      src={item.images.icon}
                      alt={item.name}
                    />
                    <span> {item.name} </span>
                  </Grid>
                ))
              )}
          </Grid>
        </div>
      </div>

      {/* {Itemlength.shopHistory[0]} */}
      <Footer />
    </div>
  );
}

export default Item;
