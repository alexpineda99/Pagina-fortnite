import '../../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';

function Br() {

    let [Brs, setBrs] = useState([]); //Battle royale
    // let [Loading, setLoading] = useState(false);
    const url = "https://fortnite-api.com/v2/news"

    useEffect(() =>{

        // setLoading(true);
        let News = async () =>{
        await axios.get(url)
        .then(res => {


        setBrs(res.data.data.br.motds);
        console.log(Brs);
        // console.log(res.data.data.br.motds);
        // setLoading(false);

      })

    }

    News();
        }, []);

  return (
    <div className="main">
        <div className="main-carousel-div">
            <h3 className="news-text"> Battle Royale </h3>

            <Carousel>
            {Brs.map(Br=> 
                <div className="Carousel-news">
                  <img src={Br.image} />
                  <span className="Carousel-news-title">{Br.title}</span>
                  <span>{Br.body}</span>
                </div>
              )}
            </Carousel>

        </div>

        
    </div>
  );
}

export default Br;