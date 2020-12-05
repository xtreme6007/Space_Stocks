import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import "./imagecard.css";
import Login from "../components/Login";
import Signup from "../components/Signup";

const useStyles = makeStyles({
  root: {
    // maxWidth: 585,
    background: "rgba(0,0,0,0.5)",
    // marginTop: ‘30px’,
    // marginLeft: ‘20px’,
    marginBottom: "20px",
    color: "rgba(0,0,0,0.7)",
    backgroundColor: "#5AFF3D",
    textAlign: "center",
    boxShadow: "5px 15px 25px 15px #000000",
  },
  media: {
    height: 260,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2.8rem",
    color: "#fff",
  },
  // desc: {
  //   fontFamily: ‘Nunito’,
  //   fontSize: ‘1.9rem’,
  //   color: ‘#fff’,
  //   textShadow: ‘2px 2px 4px #000000’,
  //   paddingBottom: ‘10px’,
  //   paddingTop: ‘20px’,
  // },
});
export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root} elevation={4}>
        {/* <CardMedia
          className={classes.media}
          image={place.imageUrl}
          username={place.username} */}
        {/* // title="Contemplative Reptile"
          > */}
        <div className="tcontainer">
          <div className="ticker-wrap">
            <div className="ticker-move">
              <div className="ticker-item">Space Stocks</div>
              <div className="ticker-item">
                Trading can be an out of this world experience...
              </div>
              <div className="ticker-item">Ready to play?</div>
            </div>
          </div>
        </div>
        {/* </CardMedia> */}
        {/* <CardContent> */}
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          <Switch>
            <Route exact path="/Signup">
              <Signup></Signup>
            </Route>
            <Route exact path={["/", "/Login"]}>
              <Login></Login>
            </Route>
          </Switch>
        </Typography>
        {/* <Link href="#" variant="body2">
                You don’t have an account? Sign up
          </Link> */}
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {/* {place.description} */}
        </Typography>
        {/* </CardContent> */}
      </Card>
    </Collapse>
  );
}