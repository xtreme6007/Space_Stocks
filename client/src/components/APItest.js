import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Api from '../utils/Api'

class APItest extends Component {


    Test(){
        Api.getGainers().then(res => {console.log(res)} )



    }

render() {

    return(
<Button className="ml-auto mr-auto mt-auto mb-auto" onClick={this.Test}></Button>

    )}
}
export default APItest


