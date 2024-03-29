import React, { useState, useEffect } from "react";
import axios from "axios";
import SmartCard from 'react-smart-card';
import LoginAdvice from "../Pages/LoginAdvice";
import ContentUnavailable from "../Pages/ContentUnavailable";

function Challenges() {
  let [Challenges, setChallenges] = useState([]);
  let [Loading, setLoading] = useState(false);
  const token = localStorage.getItem('user');
  const url = "http://localhost:3001/challenges";

  useEffect(() => {
    let fetchChallenges = async () => {
      await axios
        .get(url)

        .then((res) => {
          setChallenges(res.data.data.items);
          console.log(res.data.data.items);

          // console.log(Dailys.slice(0,1));
          setLoading(false);
        })
        .catch(err=>{
          console.log("No autenticado para ver los desafios");
          console.log(Challenges);
        })
    };

    fetchChallenges();
    console.log(Challenges);
  }, []);

  return (
    <div className="">
      <h2 className="titulo-challenge"> Challenges </h2>
      {/* { open ? <PopupRegistration pop={open}/> : fail ? <PopupFailRegistration pop={fail} /> : "" } */}
      { Challenges.length === 0 ? <ContentUnavailable/> :
        <div className="challenge-main-div">
        {Challenges.map((Challenge, index)=>
          <div className="challenges-div" key={index}>
            <SmartCard imgSrc={Challenge.metadata[4].value} title="Challenge" des={Challenge.metadata[1].value}
               titleColor="orange" desColor="red" btnBg="orange" btnColor="white"/>
          </div>
        )}
      </div>
      }
    </div>
  );
}

export default Challenges;
