import Navbar from "./Navbar";
import Footer from "./Footer";
import Flag from "react-world-flags";
import { AwesomeButtonSocial } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import "../Assets/Css/Main.css";

function About() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <h1 className="titulo-p"> About </h1>
        <div className="about-div">
          <div className="info-about-div">
            <p>Full Stack Web Developer Alexandro Pineda</p>
            <p>
              {" "}
              <Flag code="ven" height="35" />{" "}
            </p>
            <p></p>
            {/* <p><Flag code="ven" height="35" /> Aplicación web de ejemplo. </p>
        <p><Flag code="USA" height="35" /> Web application as a work example. </p>
        <p><Flag code="ITA" height="35" /> Pagina web di esempio. </p> */}
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
              url="https://github.com/alexpineda99/Pagina-fortnite"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
