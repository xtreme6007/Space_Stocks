import React from "react";
import "./Contact.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
// import Link from '@material-ui/core/Link';
=======
>>>>>>> 9eb2b9520c63dfeae2f23a4e49bc837a74595082
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WhiteTextTypography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";


library.add(faEnvelope);
// const element = <FontAwesomeIcon icon={faEnvelope} /> ReactDOM.render(element, document.body)

// function Copyright() {
//   return (
    
//   );
// }

const WhiteText = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);


export default function Contact() {
  // class Contact extends Component {
    const { push } = useHistory()
  return (
    
    <div className="test">
      <section className="contact-us-section">
        <div className="row medium-unstack">
          <div className="columns contact-us-section-left">
            <h1 className="contact-us-header">Contact Us</h1>
            <ul className="contact-us-list">
              <li className="email">
                <FontAwesomeIcon icon="envelope" className="icon" size="lg" />
                <a href="mailto:">info@spacestocks.com</a>
              </li>
            </ul>
          </div>
          <div className="columns contact-us-section-right">
            <form className="contact-us-form">
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email" />
              <textarea
                name="message"
                id
                rows={12}
                placeholder="Type your message here"
                defaultValue={""}
              />
              <div className="contact-us-form-actions">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Send it"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="dashboardButton">
      
  <button className="dashboardLink"
    type="button"
    onClick={() => push('/dashboard')}
  >
    Space Stocks Dashboard
  </button>
    </div>
    
      </section>
      <Box pl={53}>
    <WhiteText variant="contained" color="inherit" align="center">
      {'Copyright © '}
      <Link color="#FFFFFF" href="https://space-stocks.com/">
        Space Stocks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </WhiteText>
    </Box>

      
    </div>
    
  );
}



