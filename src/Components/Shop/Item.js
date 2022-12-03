import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Arrowback from "../../Assets/Images/arrow.png";
import Navbar from "../Navbar";
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
          <div className="main-additional-item">
            {Itemlength.items.length === 1 ? (
              <span className="additional-not-available"> Not included </span>
            ) : (
              Features.items.slice(1, Itemlength.items.length).map((item) => (
                <div className="additional-item">
                  <h1 className="additional-item-name"> {item.name} </h1>
                  <img
                    src={item.images.icon}
                    className="additional-item-image"
                    alt={item.name}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* {Itemlength.shopHistory[0]} */}
      <Footer />
    </div>
  );
}

export default Item;
