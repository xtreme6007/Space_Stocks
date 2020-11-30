
import React from 'react';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/snakeskin.jpg'})`,
    // opacity: '0.2',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    backgroundBlendMode: 'screen',
    // backgroundColor: 'rgba(76, 175, 80, 0.3)',
    

  }
}));
export default function() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  )
};
