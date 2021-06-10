import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SmartCard from 'react-smart-card';

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
    console.log(Challenges);
  }, []);

  return (
    <div className="main">
      <h2 className="titulo-challenge"> Challenges </h2>
        <div className="challenge-main-div">
        {Challenges.map(Challenge=>
          <div className="challenges-div">
            <SmartCard imgSrc={Challenge.metadata[4].value} title="Challenge" des={Challenge.metadata[1].value}
               titleColor="orange" desColor="red" btnBg="orange" btnColor="white"/>
            {/* <span> {Challenge.metadata[1].value} - {Challenge.metadata[4].value} </span> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Challenges;
