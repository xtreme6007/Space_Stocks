import React, { useState, useEffect } from 'react'
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
    const [starter, setStarter] = useState();
    const [stockData, setStock] = useState([]);
    const [RSI, setRSI] = useState([]);
    const [priceInfo, setPriceInfo] = useState([]);
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        async function Gainers() {
            const res = await Api.getGainers()
            console.log("Test", res)
            const sliced = await res.data.slice(0,3)
            // await setStarter(sliced);

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
    // Use this to get the RSI for each ticker returned in the gainers call  
    // const Rsi = async () => {
    //     console.log("Rsi ran")
    //     // await this.state.gainers.forEach(this.eachStock)
    //     try {
    //         console.log(starter)
    //         for (let i = 0; i < starter.length; i++) {
    //             // console.log(starter[i])
    //             await eachStock(starter[i])
    //             if (i === (starter.length - 1)) {
    //                 // console.log("Hello", stockData)
    //                 Api.saveStocks(stockData)
    //             }
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    // Use this to call and set state of tickers to use in the rsi fucntion  
    // const Gainers = async () => {
    //    const res = await Api.getGainers() 
    //         console.log("Test", res)
    //         const sliced = await res.data.slice(0,5) 
    //         setStarter(sliced);

    //          Rsi();

    // }
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

    return (
        <div>
            {/* <Button className="ml-auto mr-auto mt-auto mb-auto" onClick={Gainers}>CLick here to test</Button> */}
            <Button className="ml-auto mr-auto mt-auto mb-auto" onClick={() => { Search(SearchTest) }}>CLick here to test search</Button>
        </div>
    )

}
export default APItest

