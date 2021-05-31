import Navbar from "../Components/Navbar"
import React, {useState, useEffect} from 'react';
import Flag from 'react-world-flags'
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import '../Assets/Css/Main.css';

function About() {
 
    // let [Dailys, setDailys] = useState([]);

    useEffect(() =>{

        
        }, []);

  return (
    <div className="about-div">
        <Navbar/>
        <h1 className="titulo-p"> About </h1>
        
        <div className="info-about-div">
        <p><Flag code="ven" height="35" /> Pagina de ejemplo </p>
        <p><Flag code="USA" height="35" /> Webapp </p>
        <p><Flag code="ITA" height="35" /> </p>
        
        </div>

        <div className="social-div">
        <AwesomeButtonSocial
        className="social-button"
        cssModule={AwesomeButtonStyles}
        type="whatsapp"
        phone="+584140707842"
      />
        <AwesomeButtonSocial
        className="social-button"
        cssModule={AwesomeButtonStyles}
        type="instagram"
        url="https://www.instagram.com/mordecalex/?hl=es"
      />
      <AwesomeButtonSocial
        className="social-button"
        cssModule={AwesomeButtonStyles}
        type="github"
        url="https://github.com/alexpineda99"
      />
        </div>
        
    </div>
  );
}

export default About;