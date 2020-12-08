import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "@material-ui/core/Link";
import { Link as Scroll } from 'react-scroll';
import './LandingPage.css';
// import FontAwesome from "./IconButton";


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
  console.log(props)
  useEffect(() => {
      setChecked(true);
    
  }, []);

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
          
          </Link>
          </div>
            </Toolbar>
      </AppBar>

      <Collapse in={checked} 
      {...(checked ? { timeout: 1000 } : {})} 
      collapsedHeight={50} >
      <div className={classes.container}>
          <h1 className={classes.title}>Welcome to <br />Stock{''}

          <span className='animation'>
              Trading
          </span>
          <div className='anim-words'>
          <span >
              making trades great again!
          </span>
          </div>

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
