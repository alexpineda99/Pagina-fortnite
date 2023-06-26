import Navbar from "./Navbar";
import Br from "./News/Br";
import Creative from "./News/Creative";
import STW from "./News/STW";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Carousel from 'react-elastic-carousel';

function News() {
  let [Creatives, setCreatives] = useState([]); //Creative
  let [Brs, setBrs] = useState([]); //Battle royale
  let [Stw, setStws] = useState([]); //Save the world
  // let [Loading, setLoading] = useState(false);
  const url = "https://fortnite-api.com/v2/news";

  useEffect(() => {
    // setLoading(true);
    let News = async () => {
      await axios.get(url).then((res) => {
        setCreatives(res.data.data.creative);
        setBrs(res.data.data.br.motds);
        setStws(res.data.data.stw);

        console.log(res.data.data.br.motds);
        console.log(res.data.data.creative);
      });
    };

    News();
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <h2 className="titulo-p">News</h2>
        <Br />
        <Creative />
        <STW />
      </div>
      <Footer />
    </div>
  );
}

export default News;
