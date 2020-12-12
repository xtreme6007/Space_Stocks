import axios from "axios";
 const env = require("dot-env")


// const APIkey = process.env.ApiKey
<<<<<<< HEAD
const APIkey = "daa5f8a2ca6437380aea8522e02fc737"
=======
>>>>>>> 9eb2b9520c63dfeae2f23a4e49bc837a74595082


const APIkey = "327e4b23b1a0f7f901c39db412f9480d"




export default  {
  
  // returns a list of most gainers use this to get tickers  
  getGainers: function() {
    const GainUrl = "https://financialmodelingprep.com/api/v3/gainers?apikey="
    return axios.get(GainUrl+ APIkey);  },
  // getLosers: function () {
  //   const loserURL ="https://financialmodelingprep.com/api/v3/losers?apikey="
  //     return axios.get(loserURL + APIkey);
  // },

  // returns rsi of stock  needs a tickker passed  
  getRSI: function(Stock) {
    const RsiURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=rsi&apikey=" 
        return axios.get(RsiURL + APIkey)
  },
// Save stock object to database
  saveStocks: function(stockData) {
    console.log("Hello 45", stockData)
    return axios.post("api/stocks/", stockData);
  },

  getPrice: function(Stock) {
      const PriceURL = "https://financialmodelingprep.com/api/v3/historical-price-full/" + Stock + "?apikey="
      return axios.get(PriceURL + APIkey)



  },
  // getSMA: function(Stock) {
  //   const SmaURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=SMA&apikey=" 
  //       return axios.get(SmaURL + APIkey)
  // },
  // getADX: function(Stock) {
  //   const AdxURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=ADX&apikey=" 
  //       return axios.get(AdxURL + APIkey)
  // },
  // getWillams: function(Stock) {
  //   const WilliamsURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=Williams&apikey=" 
  //       return axios.get(WilliamsURL + APIkey)
  // }
  

  
};

