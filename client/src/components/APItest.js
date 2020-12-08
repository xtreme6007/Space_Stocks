import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Api from '../utils/Api'


function APItest() {
// set state to hold stock info  
    // state = {
    //     gainers: [],
    //     stock: [],
    //     RSI:[],
    //     PriceInfo: [],
    //     ChartData: []
    // }
    const [gainers, setGainers] = useState([]);
    const [stockData, setStock] = useState([]);
    const [RSI, setRSI] = useState([]);
    const [priceInfo, setPriceInfo] = useState([]);
    const [chartData, setChartData] = useState([]);
    // use this as the foreach callback 
    const eachStock = async (item) => {
        let response = await  Api.getRSI(item.ticker).catch(err => console.log(err))
         console.log("this is the response", response)
            let recomendation;
            // recomendation algoritham  
             if(response.data[0].rsi < 40 ) {
                recomendation = "Strong Buy"
            } else if (response.data[0].rsi > 80 ) {
                recomendation = "Strong Sell"
            } else if (response.data[0].rsi > 40 && response.data[0].rsi < 70 ) {
                recomendation = "Buy"
            } else if (response.data[0].rsi > 70 && response.data[0].rsi < 80 ) {
                recomendation = "Sell"
            }
            // set stock object
            const stock =  {ticker: item.ticker, RSI: response.data[0].rsi, recomended: recomendation} ;
            const stocks = stockData;
            stocks.push(stock)
                // set stock object to state
                setStock(stocks)
              
            console.log(stock)
        }
// Use this to get the RSI for each ticker returned in the gainers call  
     const Rsi = async () => {
        // await this.state.gainers.forEach(this.eachStock)
        for(let i=0; i < gainers.length; i++ ){
            await eachStock(gainers[i]).catch(err => console.log(err))
            if(i === (gainers.length -1)){
                console.log("Hello", stockData)
                Api.saveStocks(stockData)
            }
        }
    }
// Use this to call and set state of tickers to use in the rsi fucntion  
    const Gainers = () => {
        Api.getGainers().then(res => {
            console.log("Test", res)
            const sliced = res.data.slice(0,5) 
            setGainers(sliced);
           
            Rsi();
        })
    }
     const Search = (Stock) => {
        

    Api.getPrice(Stock).then(res => {
        const data = res.data.historical.splice(0,20)
        setPriceInfo(data)
        
        // this.state.PriceInfo.forEach()
        priceInfo.forEach(stock => {
           const data2 =  Math.round(stock.close) 
           
            const chart = chartData;
            chart.push(data2)

            setChartData(chart)
            
                 
             })
        console.log(chartData)
    }).catch(err => console.log(err))
    }
    const SearchTest= "AAPL"
    
        return (
         <div>
            <Button className="ml-auto mr-auto mt-auto mb-auto" onClick={Gainers}>CLick here to test</Button>
            <Button className="ml-auto mr-auto mt-auto mb-auto" onClick={() => {Search(SearchTest)}}>CLick here to test search</Button>
            </div>
        )
    
}
export default APItest


