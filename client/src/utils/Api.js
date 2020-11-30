import axios from "axios";
// const env = require(dot-env)



const APIkey = "apikey=f4e7c42e248f28c917aee5e08872c328"






export default  {
  
  
  getGainers: function () {
    
    const GainUrl = "https://financialmodelingprep.com/api/v3/gainers?"
    return axios.get
    (GainUrl+ APIkey);  
  },
  // getLosers: function () {
  //   const loserURL ="https://financialmodelingprep.com/api/v3/losers?"
  //     return axios.get(loserURL + process.env.ApiKey);
  // },
  // getRSI: function(Stock) {
  //   const RsiURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=rsi&" 
  //       return axios.get(RsiURL + process.env.ApiKey)
  // },
  // getSMA: function(Stock) {
  //   const SmaURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=SMA&" 
  //       return axios.get(SmaURL + process.env.ApiKey)
  // },
  // getADX: function(Stock) {
  //   const AdxURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=ADX&" 
  //       return axios.get(AdxURL + process.env.ApiKey)
  // },
  // getWillams: function(Stock) {
  //   const WilliamsURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=Williams&" 
  //       return axios.get(WilliamsURL + process.env.ApiKey)
  // }
  

  
};

