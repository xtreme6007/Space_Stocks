import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
    '& > .fa': {
      margin: theme.spacing(2),
      backgroundColor: 'red',
    },
  },
}));

export default function FontAwesome() {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className={classes.root}>

      {/* <Icon className="fas fa-space-shuttle 7x" style={{ color: green[500] }} /> */}
      <Icon className="fas fa-space-shuttle" style={{ fontSize: 50 }}  />
      {/* <Icon className="fas fa-space-shuttle" {{ color: green[500] }} /> */}
    
    </div>
  );
}