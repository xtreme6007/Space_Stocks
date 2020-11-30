import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Collapse } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import './imagecard.css';
import Login from '../components/Login';
import Login2 from '../components/Login2';
import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    marginTop: '60px',
    marginBottom: '20px',
    color: 'rgba(0,0,0,0.7)',
    backgroundColor: '#5AFF3D',
    textAlign: 'center',
    boxShadow: '5px 15px 25px 15px #000000',
  },
  media: {
    height: 260,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2.8rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.9rem',
    color: '#fff',
    textShadow: '2px 2px 4px #000000',
    paddingBottom: '10px',
    paddingTop: '20px',

  }, 
  fab: {
    margin: '40px',
    fontFamily: 'Nunito',
    backgroundColor: 'green',
    boxShadow: '5px 5px 10px #000000',
  },
  
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked}  {...(checked ? { timeout: 1000 } : {})} >

    <Card className={classes.root} elevation={4}>

        <CardMedia 
          className={classes.media}
          image={place.imageUrl}
          username={place.username}
          // title="Contemplative Reptile"
          >
        
        <div className="tcontainer"><div className="ticker-wrap"><div className="ticker-move">
        <div className="ticker-item">Snake Stocks</div>
        <div className="ticker-item">Trading can be slippery business</div>
        <div className="ticker-item">Ready to play?</div>
        </div></div></div>

        </CardMedia>
        <CardContent>

          <Typography 
          gutterBottom 
          variant="h5" 
          component="h1" 
          className={classes.title}
          >  


        <Login2>

        </Login2> 


          </Typography>

          <Link href="#" variant="body2">
                You don't have an account? Sign up
          </Link>

          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p" 
          className={classes.desc}
          >
            {place.description}

          </Typography>
        </CardContent>
   
    </Card>
  
    </Collapse>

  );
}

