import '../Assets/Css/Main.css';
import Daily from "./Shop/Daily";
import Navbar from "./Navbar";
import Challenges from "./Challenges/Challenges";
import Footer from "./Footer"
import Map from "./Map";

function Home() {
  return (
    <div className="main">
      <Navbar/>
      <Daily/>
      <Map/>
      <Challenges/>
      <Footer/>
    </div>
  );
}

export default Home;
