import Home from "./Components/Home";
import Shop from "./Components/Shop";
import News from "./Components/News";
import About from "./Components/About";
import SignIn from "./Components/Register/SignIn";
import SignUp from "./Components/Register/SignUp";
import Item from "./Components/Shop/Item";
import Notfound from "./Pages/Pagenotfound";
import { useSelector } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const state = useSelector((state) =>state.User);
  console.log(state);
  return (
      <Router>
    <div>
        <div> 
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/news" component={News} />
          <Route exact path="/about" component={About} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={Notfound} />
        </Switch>
        </div>
    </div>

    </Router>
  );
}

export default App;
