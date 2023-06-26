import * as React from "react";
import Loader from "react-loader-spinner";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./Components/Home"));
const Shop = lazy(() => import("./Components/Shop"));
const News = lazy(() => import("./Components/News"));
const About = lazy(() => import("./Components/About"));
const SignIn = lazy(() => import("./Components/Register/SignIn"));
const SignUp = lazy(() => import("./Components/Register/SignUp"));
const Item = lazy(() => import("./Components/Shop/Item"));
const itemsearch = lazy(() => import("./Components/Shop/ItemSearch"));
const Search = lazy(() => import("./Components/Search/Search"));
const Notfound = lazy(() => import("./Components/Pages/Pagenotfound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="Loader"> <Loader type="Rings" color="#109DFA" height={80} width={80} /> </div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route path="/item/:id" component={Item} />
          <Route path="/itemsearch/:id" component={itemsearch} />
          <Route path="/search" component={Search} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
