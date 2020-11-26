import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Collapse } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
    color: 'rgba(0,0,0,0.7)',
    backgroundColor: '#5AFF3D',
    textAlign: 'center',
  },
  media: {
    height: 300,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2.8rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.5rem',
    color: '#fff',
  },

});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked}  {...(checked ? { timeout: 1000 } : {})} >
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          username={place.username}
          title="Contemplative Reptile"
          boxShadow={4}
          
        />
        <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </form>

{/* <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>

<FormControl>
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl> */}

          <Typography 
          gutterBottom 
          variant="h5" 
          component="h1" 
          className={classes.title}
          boxShadow={4}
          >  
            {/* {place.title} */}

            <Fab color="secondary" 
            variant="extended" >
            Sign In
          
            </Fab>

            <Fab color="secondary" 
            variant="extended" >
            Sign Up
          
            </Fab>

          </Typography>

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

