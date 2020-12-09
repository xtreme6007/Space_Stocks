import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "@material-ui/core/Link";
import { Link as Scroll } from 'react-scroll';
import './LandingPage.css';
import { Redirect } from 'react-router-dom';
import Login from './Login'

// import FontAwesome from "./IconButton";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
    wrapper: {
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '5.5rem',
        marginTop: '100px',
    },
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

    const goToSignup = (e) => {
        console.log("cicked")
        window.location.replace("/signup")

    }

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
                <Collapse in={checked}
                    {...(checked ? { timeout: 1000 } : {})}
                    collapsedHeight={50} >
                    <section class="rw-wrapper">
                        <h2 class="rw-sentence">
                            <span>Space</span>
                            <div class="rw-words rw-words-1">
                                <span>Stocks</span>
                            </div>
                            <br />
                                <span>Trading</span>
                            <div class="rw-words rw-words-2">
                                <span>Made Easy</span>
                            </div>
                        </h2>
                    </section>
                    <div className="login">
                    <Login className={classes.login}/>
                    </div>

                    {/* <div className={classes.wrapper}>
                        <h1 className={classes.text}>Welcome to <br />Space <span className={classes.colorText}>Stocks{''}</span>
                        <div className="anim-words">
                            <span>Trading</span>
                            <span>Made</span>
                            <span>Easy</span>
                        </div>
                        </h1>
                        <div className='login'>
                        
                        </div> */}
                    {/* 
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon onClick={(e) => goToSignup(e)} className={classes.goDown} />
                            </IconButton>
                        </Scroll> */}
                    {/* </div> */}
                </Collapse>
            </AppBar>
        </div>


    );
}
