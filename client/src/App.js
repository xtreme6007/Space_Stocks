import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles, CssBaseline } from "@material-ui/core";
import LandingPage from "./components/LandingPage";
import PlaceToVisit from "./components/PlaceToVisit";
<<<<<<< HEAD
import APItest from "./components/APItest";
import Dashboard from './pages/Dashboard';
=======
import Dashboard from './pages/Dashboard';
import APItest from './components/APItest';


>>>>>>> 86e214299d561cab692b62fdface8c23270e9b65

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
<<<<<<< HEAD
    // <Router>
    // <div className={classes.root}>
    //   <CssBaseline />
    //   <LandingPage />
    //   <PlaceToVisit />
    //   <Dashboard />
    // </div>
    // </Router>
          <APItest />
=======
    
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <LandingPage />
      <PlaceToVisit />
      <Dashboard />
    </div>
    </Router>
<<<<<<< HEAD
    // <APItest />
    

=======
        // <APItest />
>>>>>>> 86e214299d561cab692b62fdface8c23270e9b65
>>>>>>> a3e74556bda6cc41ed0bad019579854bd618a7b6
  );

}




