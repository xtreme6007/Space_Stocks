import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles, CssBaseline } from "@material-ui/core";
import LandingPage from "./components/LandingPage";
import PlaceToVisit from "./components/PlaceToVisit";
import APItest from "./components/APItest";
import Dashboard from './pages/Dashboard';

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
    
    // <Router>
    // <div className={classes.root}>
    //   <CssBaseline />
    //   <LandingPage />
    //   <PlaceToVisit />
    //   {/* <Dashboard /> */}
    // </div>
    // </Router>
     <APItest />
    

  );

}




