import '../Assets/Css/Main.css';
import Navbar from "./Navbar";
import Daily from "./Shop/Daily";
import Featured from "./Shop/Featured";
import Specialfeatured from "./Shop/Specialfeatured";

function Shop() {
  return (
    <div className="main">
      <Navbar/>
      <Featured/>
      <Daily/>
      <Specialfeatured/>
    </div>
  );
}

export default Shop;