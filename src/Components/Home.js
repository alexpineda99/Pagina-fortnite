import Daily from "./Shop/Daily";
import Navbar from "./Navbar";
import Challenges from "./Challenges/Challenges";
import CreatorCode from "./CreatorCode";
import HallOfFame from "./Pages/HallOfFame";
import Footer from "./Footer";
import Map from "./Map";

function Home() {
  return (
    <div className="page-container">
      {/* change main class */}
      <div className="content-wrap">
        <Navbar />
        {/* <Daily /> */}
        <CreatorCode />
        <HallOfFame />
        <Map />
        <Challenges />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
