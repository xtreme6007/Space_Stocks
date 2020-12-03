import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Dashboard from '../pages/Dashboard';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
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
}));


export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true);
  }, []);

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}> 
            <h1 className={classes.appbarTitle}>
              Snake <span className={classes.colorText}>Stocks</span> 
            </h1>
          <IconButton>
            <SortIcon className={classes.icon}/>
          </IconButton>
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

          </h1>
          {/* <h1 className={classes.simple}>
          <span className={classes.colorText}>Made Simple</span>
          </h1> */}
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
