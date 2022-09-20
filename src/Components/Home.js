import "../Assets/Css/Main.css";
import Daily from "./Shop/Daily";
import Navbar from "./Navbar";
import Challenges from "./Challenges/Challenges";
import CreatorCode from "./New Components/CreatorCode";
import Footer from "./Footer";
import Map from "./Map";

function Home() {
  return (
    <div className="page-container">
      {/* change main class */}
      <div className="content-wrap">
        <Navbar />
        <Daily />
        {/* <CreatorCode /> */}
        <Map />
        {/* <Challenges /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
