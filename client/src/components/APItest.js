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
              this.setState({
    
                  RSI: res.data[0].rsi
              })
              console.log(res)
              console.log(this.state.RSI)
    
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


