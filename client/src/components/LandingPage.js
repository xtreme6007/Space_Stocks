import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Collapse } from '@material-ui/core';
import './LandingPage.css';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
    // console.log(props)
    useEffect(() => {
        setChecked(true);

    }, []);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {


    });

    const goToSignup = (e) => {
        // console.log("cicked")
        window.location.replace("/signup")

    }

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        Space <span className={classes.colorText}>Stocks</span>
                    </h1>
                </Toolbar>
                <Collapse in={checked}
                    {...(checked ? { timeout: 1000 } : {})}
                    collapsedHeight={50} >

                    <Container>
                        <Row className="justify-content-md-center">

                            <section className="rw-wrapper">
                                <h2 className="rw-sentence">
                                    <span>Space</span>
                                    <div className="rw-words rw-words-1">
                                        <span>Stocks</span>
                                    </div>
                                    <br />
                                    <span>Trading</span>
                                    <div className="rw-words rw-words-2">
                                        <span>Made Easy</span>
                                    </div>
                                </h2>
                            </section>

                        </Row>
                        <Row>
                            <div className="login">
                                <Login className={classes.login} />
                            </div>
                        </Row>
                    </Container>
                </Collapse>
            </AppBar>
        </div>


    );
}
