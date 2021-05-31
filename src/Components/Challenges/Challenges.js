import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Challenges() {
  let [Challenges, setChallenges] = useState([]);
  let [Loading, setLoading] = useState(false);
  const url = "http://localhost:3001/challenges";

  useEffect(() => {
    let fetchChallenges = async () => {
      await axios
        .get(url)

        .then((res) => {
          setChallenges(res.data.data.items);

          // console.log(res.data.data.daily.entries);

          // console.log(res.data.data.items);
          
          console.log(res.data.data.items);

          // console.log(Dailys.slice(0,1));
          setLoading(false);
        });
    };

    fetchChallenges();
  }, []);

  return (
    <div className="main">
      <h2 className="titulo-challenge"> Challenges </h2>
        {Challenges.map(Challenge=>
          <div className="item">
            {Challenge.metadata.map(item=>
              
              <span> {item.value} </span>

              )}
          </div>
        )}
    </div>
  );
}

export default Challenges;
