import '../Assets/Css/Main.css';
import Daily from "./Shop/Daily";
import Navbar from "./Navbar";
import Challenges from "./Challenges/Challenges";
import Footer from "./Footer"
import Map from "./Map";

function Home() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Navbar/>
      <Daily/>
      <Map/>
      <Challenges/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
