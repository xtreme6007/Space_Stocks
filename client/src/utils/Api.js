import axios from "axios";
 const env = require("dot-env")



const APIkey = process.env.ApiKey






export default  {
  
  
  getGainers: function () {
    
    const GainUrl = "https://financialmodelingprep.com/api/v3/gainers?apikey="
    return axios.get
    (GainUrl+ APIkey);  
  },
  getLosers: function () {
    const loserURL ="https://financialmodelingprep.com/api/v3/losers?apikey="
      return axios.get(loserURL + APIkey);
  },
  getRSI: function(Stock) {
    const RsiURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=rsi&apikey=" 
        return axios.get(RsiURL + APIkey)
  },
  getSMA: function(Stock) {
    const SmaURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=SMA&apikey=" 
        return axios.get(SmaURL + APIkey)
  },
  getADX: function(Stock) {
    const AdxURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=ADX&apikey=" 
        return axios.get(AdxURL + APIkey)
  },
  getWillams: function(Stock) {
    const WilliamsURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=Williams&apikey=" 
        return axios.get(WilliamsURL + APIkey)
  }
  

  
};

