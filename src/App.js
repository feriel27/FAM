import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUS from './components/pages/AboutUS';
import SupportUS from './components/pages/SupportUS'
import Gallery from './components/pages/Gallery'
import Show from './components/pages/Show'
import Test from './components/pages/tets'
import Cart from './components/pages/CartFull'

import 'bootstrap/dist/css/bootstrap.min.css';
import DetailItem from "./components/pages/DetailItem";

function App() {
  return (


             <Router>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/aboutUS" component={AboutUS}/>
                 <Route exact path="/supportUS" component={SupportUS}/>
                 <Route exact path="/collections" component={Show}/>
                 <Route exact path="/gallery" component={Gallery}/>
                 <Route exact path="/test" component={Test}/>
                 <Route exact path="/cartfull" component={Cart}/>
                 <Route exact path="/itemdetail" component={DetailItem}/>


             </Router>

);
}

export default App;
