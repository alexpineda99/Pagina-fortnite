<<<<<<< Updated upstream
import '../Assets/Css/Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Main() {

    let [Daily, setDaily] = useState([]);

    useEffect(() =>{

        axios.get(`https://fortnite-api.com/v2/shop/br`)
      .then(res => {
        // console.log(res.data.data.daily.entries);
        setDaily(res.data.data.daily.entries);
        console.log(Daily);
      })
        
        }, []);

  return (
    <div className="">

        <h1 className="titulo-p"> Daily </h1>
        
    </div>
  );
}

export default Main;
=======
        /* #109DFA */
        /* #024A86 */
        /* #E69DFB */
        /* #FF689D*/
        /* #222222 */
>>>>>>> Stashed changes
