import '../Assets/Css/Main.css';
import Daily from "./Shop/Daily";
import Navbar from "./Navbar";
import Challenges from "./Challenges/Challenges";

function Home() {
  return (
    <div className="main">
      <Navbar/>
      <Daily/>
      <Challenges/>
      
    </div>
  );
}

export default Home;
