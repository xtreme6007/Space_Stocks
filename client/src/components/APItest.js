import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Api from '../utils/Api'




class APItest extends Component {

    state = {
        gainers: [],
        stock: [],
        RSI:[]


    }
    eachStock = (item, index) => {
        Api.getRSI(item.ticker).then(res => {
            let recomendation;
            if(res.data[0].rsi < 70 ) {
                recomendation = "Strong Buy"
            } else if (res.data[0].rsi > 70 ) {
                recomendation = "Strong Sell"
            }
            
            const stock =  {ticker: item.ticker, RSI: res.data[0].rsi, recomended: recomendation} ;
            const stocks = this.state.stock;
            stocks.push(stock)


              this.setState({
    
                  stock: stocks
              })
            console.log(this.state.stock)
    
        })
        Api.saveStocks(this.state.stock)
      
        }
     

    Rsi = () => {
        this.state.gainers.forEach(this.eachStock)
        
        



    }

    Test = () => {
        
        Api.getGainers().then(res => {
            const sliced = res.data.slice(0,5) 
            
            this.setState(
                {
                    gainers: sliced
                }
            )
            this.Rsi()
        })
        



    }

    render() {

        return (
            <Button className="ml-auto mr-auto mt-auto mb-auto" onClick={this.Test}>CLick here to test</Button>

        )
    }
}
export default APItest


