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
  let [Itemlength, setItemlength] = useState(Features.items.length);
  let history = useHistory();
  const { pathname } = useLocation();
  const { id } = useParams();

  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    console.log(id);
    axios
      .get(`/item/${id}`, {
        headers: { auth: token },
      })
      // axios.get(`/item/${id}`)
      .then((res) => {
        console.log(res);
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
      <div className="content-wrap">
      <div className="optional-content-wrap">
        <Navbar />
          <div className="arrow-back-div">
            <img
              src={Arrowback}
              className="arrow-back"
              onClick={goToPreviousPath}
              alt="arrowback"
            />
          </div>
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
            {Itemlength === 1 ? (
              <span className="additional-not-available"> Not availables </span>
            ) : (
              Features.items.slice(1, Itemlength).map((item) => (
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
      <Footer />
    </div>
  );
}

export default Item;
