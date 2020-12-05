import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Api from '../utils/Api'




class APItest extends Component {

    state = {
        gainers: [],
        stock: [],
        RSI:[]


    }
    eachStock = async (item) => {
       
        let response = await  Api.getRSI(item.ticker).catch(err => console.log(err))
         console.log("this is the response", response)
          
            let recomendation;
            if(response.data[0].rsi < 70 ) {
                recomendation = "Strong Buy"
            } else if (response.data[0].rsi > 70 ) {
                recomendation = "Strong Sell"
            }
            
            const stock =  {ticker: item.ticker, RSI: response.data[0].rsi, recomended: recomendation} ;
            const stocks = this.state.stock;
            stocks.push(stock)


              this.setState({
    
                  stock: stocks
              })
            console.log(this.state.stock)
    
        
        
      
        }
     

    Rsi = async () => {
        // await this.state.gainers.forEach(this.eachStock)
        for(let i=0; i < this.state.gainers.length; i++ ){
            await this.eachStock(this.state.gainers[i]).catch(err => console.log(err))
            if(i === (this.state.gainers.length -1)){
                console.log("Hello", this.state.stock)
                Api.saveStocks(this.state.stock)
            }


        }
       
        
        



    }

    Test = () => {
        
        Api.getGainers().then(res => {
            console.log("Test", res)
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


