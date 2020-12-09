import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles, CssBaseline } from "@material-ui/core";
import PlaceToVisit from "./components/PlaceToVisit";
// import APItest from "./components/APItest";
import Dashboard from './pages/Dashboard';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';

import Login from './components/Login';
import Header from './components/Login'
import Contact from './pages/Contact/Contact';



const useStyles = makeStyles((theme) => ({

  
  root: {
    minHeight: "100vh",
    backgroundImage: `url(./assets/universe.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "screen",
  },
}));
export default function () {

  
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
   

<Router basename='/'>

<div className="mb-5">
  <Switch>

    <Route exact path="/" component={LandingPage} />

    <Route exact path="/" component={Header} />

    <Route exact path="/signup" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/contact" component={Contact} />
    
  </Switch>
</div>
</Router>
    {/* //  <APItest /> */}
    </div>
    </>

  );

}




