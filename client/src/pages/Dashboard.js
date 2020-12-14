import React, { useState, useEffect } from 'react';
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
import Button from '@material-ui/core/Button';
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
import { set } from 'mongoose';
import './dashboard.css';

function Copyright() {
  return (
    <Box pl={53}>
    <WhiteTextTypography variant="contained" color="inherit" align="center">
      {'Copyright © '}
      <Link color="#FFFFFF" href="https://space-stocks.com/">
        Space Stocks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </WhiteTextTypography>
    </Box>
  );
}



function Contact() {
  return (
    <Box pl={50}>
    <Button
    style={{
      borderRadius: 35,
      backgroundColor: "#5AFF3D",
      // paddingLeft: '150px'
  }}
    variant="contained" color="primary" className="contactLink">
    <Typography variant="h1" color="textDanger" align="center">
      
      <WhiteTextTypography variant="h4">
        <Link
     color="inherit" href="/Contact">
          Contact Us
      </Link>{' '}
      </WhiteTextTypography>
      
    </Typography>
    </Button>
    </Box>
  );
}
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'Nunito',
    
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    fontFamily: 'nunito',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 5px',
    fontFamily: 'nunito',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      fontFamily: 'nunito',
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
    fontFamily: 'nunito',
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'nunito',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    overflow: "hidden",
    fontFamily: 'nunito',
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
    fontFamily: 'nunito',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    fontFamily: 'nunito',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    fontFamily: 'nunito',
  },
  fixedHeight: {
    height: 250,
    overflow: 'auto',
  },
}));
export default function Dashboard() {
  const [starter, setStarter] = useState();
  const [stockData, setStockData] = useState([]);
  const [RSI, setRSI] = useState([]);
  const [priceInfo, setPriceInfo] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [recomendation, setRecomendation] = useState()
  const [query, setQuery] = useState()
  const [color, setColor] = useState();
  const [title, setTitle] = useState();
  useEffect(() => {
    async function Gainers() {
      const res = await Api.getGainers()
      console.log("Test", res)
      const sliced = await res.data.slice(0, 5)
      setStarter(sliced);
      for (let i = 0; i < sliced.length; i++) {
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
    // console.log("its an item", item)
    let response = await Api.getRSI(item.ticker).catch(err => console.log(err))
    // console.log("this is the response", response)
    let advice;
    // advice algoritham  
    if(!response) {
      advice = "Not Enough Information"
    }
    else if (response.data[0].rsi < 40) {
      advice = "Strong Buy"
    } else if (response.data[0].rsi > 80) {
      advice = "Strong Sell"
    } else if (response.data[0].rsi > 40 && response.data[0].rsi < 70) {
      advice = "Buy"
    } else if (response.data[0].rsi > 70 && response.data[0].rsi < 80) {
      advice = "Sell"
    } 
    // set stock object
    const stock = { ticker: item.ticker, RSI: (response && response.data[0].rsi) ? response.data[0].rsi : "Need More Information" , recomended: advice };
    const stocks = stockData;
    stocks.push(stock)
    // set stock object to state
    setStockData([...stocks])
    // console.log(stockData)
    return "it might help";
  }
  const Search = async (Stock) => {

    setTitle(Stock)

    try {
      const result = await Api.getPrice(Stock)
      const data = await result.data.historical.splice(0, 20)
      setPriceInfo([...data])
      // this.state.PriceInfo.forEach()

      const chart = await priceInfo.reverse().map(stock => {
        const price = stock.close.toFixed(2);
        return { close: price, date: stock.date }
      })
      setChartData([...chart])
      // console.log(chartData)
    }
    catch (err) {  alert("Please search a valid stock ticker") }
  }
  function createData(date, amount) {
    return { date, amount };
  }

  const chartPoints = chartData.map(res => {
    // console.log(res)
    return createData(res.date, res.close)

  })

  const findOne =  async ( e, input) => {
    e.preventDefault();
    // console.log((input))
    Search(input);
    let response = await Api.getRSI(input).catch(err => console.log(err))
    if (response.data[0].rsi < 40) {
      setRecomendation("Strong Buy")
    } else if (response.data[0].rsi > 80) {
      setRecomendation("Strong Sell")
    } else if (response.data[0].rsi > 40 && response.data[0].rsi < 70) {
     setRecomendation("Buy")
    } else if (response.data[0].rsi > 70 && response.data[0].rsi < 80) {
       setRecomendation("Sell")
    } else  {
      setRecomendation("Not Enough Information")
    }
    }

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
          <ListItemText className='spaceStock' primary="" />
          <ListItemText className='spaceStock' primary="Space Stocks" />
        </ListItem><br />
        <ListItem button onClick={() => {
          Search((stockData && stockData[0]) ? stockData[0].ticker : "Loading")
          setRecomendation(stockData[0].recomended)
        }}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={(stockData && stockData[0]) ? stockData[0].ticker : "Loading"} />
        </ListItem>
        <ListItem button onClick={() => {
          Search(stockData[1].ticker)
          setRecomendation(stockData[1].recomended)
        }}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={(stockData && stockData[1]) ? stockData[1].ticker : "Loading"} />
        </ListItem>
        <ListItem button onClick={() => {
          Search((stockData && stockData[2]) ? stockData[2].ticker : "Loading")
          setRecomendation(stockData[2].recomended)
        }}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={(stockData && stockData[2]) ? stockData[2].ticker : "Loading"} />
        </ListItem>
        <ListItem button onClick={() => {
          Search((stockData && stockData[3]) ? stockData[3].ticker : "Loading")
          setRecomendation(stockData[3].recomended)
        }}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={(stockData && stockData[3]) ? stockData[3].ticker : "Loading"} />
        </ListItem>
        <ListItem button onClick={() => {
          Search((stockData && stockData[4]) ? stockData[4].ticker : "Loading")
          setRecomendation(stockData[4].recomended)
        }}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={(stockData && stockData[4]) ? stockData[4].ticker : "Loading"} />
        </ListItem>
       <div container className='space'>
        <div id='center'>
          <div id="spaceship">
            <div id="window"></div>
          </div>
          <div id='tail'></div>
          <div id='left-wing'></div>
          <div id="right-wing"></div>
          <div id="exhaust"></div>
          <div id="tail"></div>

        </div>
        </div>
        <Divider />
        <Divider />

      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <form className='searchForm'>
        <input 
     type="input"
     key="random1"
     placeholder={"search Stock"}
     onChange={(e) => setQuery(e.target.value)}
    />
 
    <button className='alButton' onClick={(e) => {
     
      findOne(e, query)
    }
  }>Ask Algo</button>

        </form>

          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart data={chartPoints} title={title}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} >

                <h1 className="rec">Algo, the alien Recommends:</h1><br />
                <h2>{recomendation}</h2>
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