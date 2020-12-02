import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Api from '../utils/Api'




class APItest extends Component {

    state = {
        gainers: [],
        stock: [{
            ticker: "",
            RSI: "",
        }],
        RSI:[]


    }
    eachStock = (item, index) => {
        Api.getRSI(item.ticker).then(res => {
            const stock =  {ticker: item.ticker, RSI: res.data[0].rsi} ;
            const stocks = this.state.stock;
            stocks.push(stock)


              this.setState({
    
                  stock: stocks
              })
            console.log(this.state.stock)
    
        })
      
        }
     

    Rsi = () => {
        this.state.gainers.forEach(this.eachStock)
        
        



    }

    Test = () => {
        
        Api.getGainers().then(res => {
            const sliced = res.data.slice(0,4) 
            
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


