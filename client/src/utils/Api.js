import axios from "axios";
const env = require(dot-env)

const loserURL ="https://financialmodelingprep.com/api/v3/losers?"
const GainUrl = "https://financialmodelingprep.com/api/v3/gainers?"





function API() {
  getGainers: function () {
    return axios.get
    (GainUrl+ process.env.ApiKey);  
  },
  getLosers: function () {
      return axios.get(loserUrl + process.env.ApiKey);
  },
  getRSI: function(Stock) {
    const RsiURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=rsi&" 
        return axios.get(RsiURL + process.env.ApiKey)
  },
  getSMA: function(Stock) {
    const SmaURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=SMA&" 
        return axios.get(SmaURL + process.env.ApiKey)
  },
  getADX: function(Stock) {
    const AdxURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=ADX&" 
        return axios.get(AdxURL + process.env.ApiKey)
  },
  getWillams: function(Stock) {
    const WillamsURL = "https://financialmodelingprep.com/api/v3/technical_indicator/daily/" + Stock + "?period=10&type=Williams&" 
        return axios.get(WilliamsURL + process.env.ApiKey)
  }
  

  
};

export default API