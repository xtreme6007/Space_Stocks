import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "@material-ui/core/Link";
import { Link as Scroll } from 'react-scroll';
<<<<<<< HEAD:client/src/components/Header.js
import Dashboard from '../pages/Dashboard';


=======
import './LandingPage.css';
// import FontAwesome from "./IconButton";
>>>>>>> 86e214299d561cab692b62fdface8c23270e9b65:client/src/components/LandingPage.js

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '2rem',
        fontFamily: 'Nunito',
        marginTop: '15px',
    },
    icon: {
        color: '#fff',
        fontsize: '10rem',
    },
    colorText: {
        color: '#5AFF3D',
    },
    animation: {
        color: '#5AFF3D',
        position: 'relative',
        animation: 'move-text-color'

    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '5.5rem',
    },
    simple: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '5.5rem',
        fontStyle: 'italic',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '7rem',
    },
    fas: {
        color: '#5AFF3D',
    }
}));


export default function Header(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true);
  }, []);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const [change, setChange] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    
  });

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}> 
            <h1 className={classes.appbarTitle}>
              Space <span className={classes.colorText}>Stocks</span> 
            </h1>
            <div><Link href="/">

          {/* <FontAwesome>
          <div className={classes.appbarTitle}>
      <Icon className="fas fa-space-shuttle" />
          </div> 
          </FontAwesome> */}
          
          </Link>
          </div>
            </Toolbar>
      </AppBar>

      <Collapse in={checked} 
      {...(checked ? { timeout: 1000 } : {})} 
      collapsedHeight={50} >
      <div className={classes.container}>
          <h1 className={classes.title}>Welcome to <br />Stock{''}
          <span className={classes.colorText}>
              Trading
          </span>


          {/* {props.copy.split("").map(function(char, index){
    const style = {"animation-delay": (0.5 + index / 10) + "s"};
    return<span className={classes.animation}>
              has never been so easy   
          </span>;
          })} */}

          </h1>


          <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
              <ExpandMoreIcon className={classes.goDown}/>
          </IconButton>
          </Scroll>
      </div>
      </Collapse>
    </div>


  );
}
