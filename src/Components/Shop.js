import Navbar from "./Navbar";
import Daily from "./Shop/Daily";
import Featured from "./Shop/Featured";
import Specialfeatured from "./Shop/Specialfeatured";
import Footer from "./Footer";

function Shop() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Featured />
        <Daily />
        <Specialfeatured />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
