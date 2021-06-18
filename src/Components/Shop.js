import '../Assets/Css/Main.css';
import Navbar from "./Navbar";
import Daily from "./Shop/Daily";
import Featured from "./Shop/Featured";
import Specialfeatured from "./Shop/Specialfeatured";
import Footer from "./Footer"

function Shop() {
  return (
    <div className="main">
      <Navbar/>
      <Featured/>
      <Daily/>
      <Specialfeatured/>
      <Footer/>
    </div>
  );
}

export default Shop;