import React from "react";
import "./Contact.css";
// import ReactDOM from 'react-dom;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);
 
// const element = <FontAwesomeIcon icon={faEnvelope} /> ReactDOM.render(element, document.body)

export default function Contact() {
// class Contact extends Component {
  return(
<div className="test">
<section className="contact-us-section">
  <div className="row medium-unstack">
    <div className="columns contact-us-section-left">
      <h1 className="contact-us-header">Contact Us</h1>
      {/* <div className="responsive-embed">
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=campbell&zoom=13&scale=false&size=600x300&maptype=roadmap&sensor=false&format=png&visual_refresh=true" alt="Google Map of campbell" />
      </div> */}
      <ul className="contact-us-list">
      
        <li className="email"><FontAwesomeIcon icon="envelope" className="icon" size="lg" /><a href="mailto:">info@spacestocks.com</a></li>
      </ul>
    </div>
    <div className="columns contact-us-section-right">
      <form className="contact-us-form">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <textarea name="message" id rows={12} placeholder="Type your message here" defaultValue={""} />
        <div className="contact-us-form-actions">
          <input type="submit" className="button" defaultValue="Send it" />
          
        </div>
      </form>
    </div>
  </div>
</section>
</div>

)
}


