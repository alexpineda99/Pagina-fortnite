import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Arrowback from "../../Assets/Images/arrow.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import dateFormat from "dateformat";
import axios from "axios";
const token = localStorage.getItem("user");

function Item(props) {
  let [Features, setFeatures] = useState(props.history.location.state.props);
  let [Itemlength, setItemlength] = useState(
    Features.items ? Features.items.length : null
  );
  let [shophistory, setShophistory] = useState([]);
  let [Search, setsearch] = useState(Itemlength ? null : Features);
  let history = useHistory();
  const { pathname } = useLocation();
  const { id } = useParams();
  const goToPreviousPath = () => {
    history.goBack();
  };
  // setShophistory(Search.shopHistory)
  // console.log(Search);
  // console.log(Itemlength);
  console.log("historia: ", shophistory);
  let addeditem = Search ? new Date(Search.added) : null;
  useEffect(() => {
    setShophistory(Search ? Search.shopHistory : null);
    console.log(shophistory);
    console.log(id);
    axios
      .get(`/item/${id}`, {
        headers: {'auth': token},
      })
      .then((res) => {
        console.log(res.data);
        console.log("authorized");
      })
      .catch((err) => {
        console.log(err);
        console.log("not authorized");
        window.location.href = "https://alex-fortnite.netlify.app/signin";
      });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="main">
      <div className="main-info-item">
      <Navbar />
      <div className="arrow-back-div">
        <img
          src={Arrowback}
          className="arrow-back"
          onClick={goToPreviousPath}
          alt="arrowback"
        />
      </div>
      <div>
        {Search ? (
          <div className="item-info">
            <h1 className="item-name"> {Search.name} </h1>
            <img
              src={
                Search.images.icon !== null
                  ? Search.images.icon
                  : Search.images.smallIcon
              }
              className="item-image"
              alt={Search.name}
            />
          </div>
        ) : (
          Features.items.slice(0, 1).map((item) => (
            <div className="item-info">
              <h1 className="item-name"> {item.name} </h1>
              <img
                src={item.images.icon}
                className="item-image"
                alt={item.name}
              />
            </div>
          ))
        )}
      </div>

      <div>
        {Search ? (
          <div className="search-item-div">
            <center>
              <h2> Information </h2>
            </center>
            <div className="search-info">
              <div className="search-info-main">
                <p> Name: {Search.name} </p>
                <p> Type of item: {Search.type.displayValue} </p>
                <p> Description: {Search.description} </p>
                <p> Rarity: {Search.rarity.displayValue} </p>
                <p>
                  {" "}
                  Introduction:{" "}
                  {Search.introduction
                    ? Search.introduction.text
                    : "Introduction date not available"}
                </p>
                <p> Item added - UTC time: {addeditem.toUTCString()} </p>
                <p> Item added - local time: {addeditem.toString()} </p>
              </div>

              <div className="search-shophistory">
                <h3> Shop History </h3>
                {Search.shopHistory === null ? (
                  <p> No history found </p>
                ) : (
                  Search.shopHistory.map((date, index) => (
                    <p key={index} className="date-shophistory">
                      {" "}
                      {dateFormat(date, "mmmm dS, yyyy")}{" "}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="main-info-additional-item">
            <div className="item-price">
              <span> {Features.finalPrice} </span> &nbsp;{" "}
              <img
                src={VBucks}
                className="v-bucks-img-item"
                alt="v-bucks price"
              />
            </div>
            <span className="additional-name"> Additional items: </span>
            <div className="main-additional-item">
              {Itemlength === 1 ? (
                <span className="additional-name"> No </span>
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
        )}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Item;
