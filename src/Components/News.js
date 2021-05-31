import '../Assets/Css/Main.css';
import Navbar from "./Navbar";
import Br from "./News/Br";
import Creative from "./News/Creative";
import STW from "./News/STW";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Carousel from 'react-elastic-carousel';

function News() {

    let [Creatives, setCreatives] = useState([]); //Creative
    let [Brs, setBrs] = useState([]); //Battle royale
    let [Stw, setStws] = useState([]); //Save the world
    // let [Loading, setLoading] = useState(false);
    const url = "https://fortnite-api.com/v2/news"

    useEffect(() =>{

        // setLoading(true);
        let News = async () =>{
        await axios.get(url)
        .then(res => {

        // setFeatures(res.data.data.featured.entries);

        // console.log(res.data.data.br);

        setCreatives(res.data.data.creative);
        setBrs(res.data.data.br.motds);
        setStws(res.data.data.stw);

        // console.log(Creatives);
        console.log(res.data.data.br.motds);
        console.log(res.data.data.creative);
        // console.log(Stw);
        // console.log(res.data.data.br.motds);

        // console.log(Dailys.slice(0,1));
        // setLoading(false);

      })

    }

    News();
        }, []);

  return (
    <div className="main">
        <Navbar/>
        <h2 className="titulo-p">News</h2>
        <Br/>
        <Creative/>
        <STW/>
        
    </div>
  );
}

export default News;