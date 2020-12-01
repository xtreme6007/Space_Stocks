import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";



// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

import Dashboard from './pages/Dashboard';

import APItest from './components/APItest';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(./assets/universe.jpg)`,

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'screen',
    // backgroundColor: 'rgba(76, 175, 80, 0.3)',
  }

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    backgroundBlendMode: "screen",
    // backgroundColor: 'rgba(76, 175, 80, 0.3)',
  },

}));
export default function () {
  const classes = useStyles();
  return (

  <Router>

    <Router>

    <div className={classes.root}>
      <APItest />
      {/* <CssBaseline />
      <Header />

      <PlaceToVisit />
      
    </div>
    <Route exact path="/dashboard" component={Dashboard} />
    </Router>
  )
};

      <PlaceToVisit /> */}

    </div>
    </Router>
  );
}


