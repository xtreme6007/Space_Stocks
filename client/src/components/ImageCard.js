import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import "./imagecard.css";

const useStyles = makeStyles({
  root: {
    background: "rgba(0,0,0,0.5)",
    marginBottom: "20px",
    color: "rgba(0,0,0,0.7)",
    // backgroundColor: "#5AFF3D",
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
});
export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root} elevation={4}>
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
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
        </Typography>
      </Card>
    </Collapse>
  );
}
