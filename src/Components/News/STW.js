import '../../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SmartCard from 'react-smart-card';

function STW() {

    let [STWS, setSTWS] = useState([]); //Creative
    // let [Loading, setLoading] = useState(false);
    const url = "https://fortnite-api.com/v2/news"

    useEffect(() =>{

        // setLoading(true);
        let News = async () =>{
        await axios.get(url)
        .then(res => {


        setSTWS(res.data.data.stw.messages);
        console.log(res.data.data.stw);
        // console.log(res.data.data.br.motds);
        // setLoading(false);

      })

    }

    News();
        }, []);

  return (
        <div className="main-creative-div">
            <div>
            <h3 className="news-text"> Save The World </h3>
            {STWS.map(STW=> 
            <div className="">
                <SmartCard imgSrc={STW.image} title={STW.title} des={STW.body}
                titleColor="orange" desColor="red"/>
            </div>
            )}
            </div>

        </div>
  );
}

export default STW;