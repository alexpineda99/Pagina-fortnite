import '../Assets/Css/Main.css';
import Home from "./Home";
import Shop from "./Shop";
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <Router>
    <div>
      <nav>
        {/* <ul>
         <li> <a href="/"> Inicio </a>  </li>
         <li> <a href="/tienda"> Tienda </a> </li>
         <li> <a href="/descripcion"> Busqueda </a> </li>
        </ul> */}

        <div className="nav-user">
        <ul className="ul-user">
         <li> <a href="/"> Inicio </a>  </li>
         <li> <a href="/tienda"> Tienda </a> </li>
         <li> <a href="/descripcion"> Busqueda </a> </li>
        </ul>
        <ul className="ul-user">
        <li> <a href="/"> Iniciar sesion </a>  </li>
        <li> <a href="/"> Cerrar sesion </a> </li>
        </ul>
        </div> 
        
      </nav>
    </div>

    </Router>
  );
}

export default Navbar;
