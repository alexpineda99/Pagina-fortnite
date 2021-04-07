import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Notfound from "./Pages/Pagenotfound";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
    <div>
        <div> 
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/tienda" component={Shop} />
          <Route component={Notfound} />
        </Switch>
        </div>
    </div>

    </Router>
  );
}

export default App;
