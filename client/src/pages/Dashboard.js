import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Chart from '../components/Chart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Api from '../utils/Api'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://space-stocks.com/">
        Space Stocks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Contact() {
  return (
    <Typography variant="body2" color="textDanger" align="center">
      {/* {'Copyright © '} */}
      <WhiteTextTypography variant="h4">
      <Link color="inherit" href="/Contact">
        Contact Us
      </Link>{' '}
      </WhiteTextTypography>
      {/* {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  );
}

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const drawerWidth = 140;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 5px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 30,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

  
}));
export default function Dashboard() {
  const [starter, setStarter] = useState();
    const [stockData, setStock] = useState([]);
    const [RSI, setRSI] = useState([]);
    const [priceInfo, setPriceInfo] = useState([]);
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        async function Gainers() {
            const res = await Api.getGainers()
            console.log("Test", res)
            const sliced = await res.data.slice(0,5)
             setStarter(sliced);

             for (let i = 0; i < sliced.length; i++) {
                 console.log("HEREEEE" + i, sliced[i])
                await eachStock(sliced[i])
                if (i === (sliced.length - 1)) {
                    // console.log("Hello", stockData)
                    Api.saveStocks(stockData)
                }
            }
        }
        Gainers();
    }, [])

    // use this as the foreach callback 
    const eachStock = async (item) => {
        console.log("its an item", item)
        let response = await Api.getRSI(item.ticker).catch(err => console.log(err))
        console.log("this is the response", response)
        let recomendation;
        // recomendation algoritham  
        if (response.data[0].rsi < 40) {
            recomendation = "Strong Buy"
        } else if (response.data[0].rsi > 80) {
            recomendation = "Strong Sell"
        } else if (response.data[0].rsi > 40 && response.data[0].rsi < 70) {
            recomendation = "Buy"
        } else if (response.data[0].rsi > 70 && response.data[0].rsi < 80) {
            recomendation = "Sell"
        }
        // set stock object
        const stock = { ticker: item.ticker, RSI: response.data[0].rsi, recomended: recomendation };
        const stocks = stockData;
        stocks.push(stock)
        // set stock object to state
        setStock(stocks)

        console.log(stock)
    }
   
    const Search = (Stock) => {


        Api.getPrice(Stock).then(res => {
            const data = res.data.historical.splice(0, 20)
            setPriceInfo(data)

            // this.state.PriceInfo.forEach()
            priceInfo.forEach(stock => {
                const data2 = Math.round(stock.close)

                const chart = chartData;
                chart.push(data2)

                setChartData(chart)


            })
            console.log(chartData)
        }).catch(err => console.log(err))
    }
    const SearchTest = "AAPL"



  // -------------------------------------------------------------
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={handleDrawerOpen}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="" />
          <ListItemText primary="Space Stocks" />
        </ListItem><br />
        <ListItem button>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={(starter && starter[0]) ? starter[0].ticker : "Loading"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={(starter && starter[1]) ? starter[1].ticker : "Loading"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={(starter && starter[2]) ? starter[2].ticker : "Loading"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={(starter && starter[3]) ? starter[3].ticker : "Loading"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={(starter && starter[4]) ? starter[4].ticker : "Loading"} />
        </ListItem>
        <Divider />
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
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
              </Paper>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <Box>
            <Contact />
          </Box>
          <Box pt={4}>
            <Copyright />
          </Box>
          <div>
          </div>
        </Container>
      </main>
    </div>
  );
}