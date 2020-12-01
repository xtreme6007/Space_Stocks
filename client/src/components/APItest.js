import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Api from '../utils/Api'

class APItest extends Component {

    state = {
        gainers: [],
        stock: [{
            ticker: "",
            RSI: "",
        }]


    }

    Test = () => {
        Api.getGainers().then(res => {
            
            this.setState(
                {
                    gainers: res
                }
            )
            
        })



    }

    render() {

        return (
            <Button className="ml-auto mr-auto mt-auto mb-auto" onClick={this.Test}>CLick here to test</Button>

        )
    }
}
export default APItest


