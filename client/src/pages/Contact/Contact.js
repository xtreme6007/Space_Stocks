import React from "react";
import "./Contact.css";

export default function Dashboard() {
// class Contact extends Component {
  return(

<section className="contact-us-section">
  <div className="row medium-unstack">
    <div className="columns contact-us-section-left">
      <h1 className="contact-us-header">Get In Touch</h1>
      <div className="responsive-embed">
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=campbell&zoom=13&scale=false&size=600x300&maptype=roadmap&sensor=false&format=png&visual_refresh=true" alt="Google Map of campbell" />
      </div>
      <ul className="contact-us-list">
        <li className="address">100 W Rincon Ave, Campbell CA 95008</li>
        <li className="email"><a href="mailto:">hello@yeticave.com</a></li>
        <li className="phone">
          1 (408) 445 9978
        </li>
      </ul>
    </div>
    <div className="columns contact-us-section-right">
      <h1 className="contact-us-header">Mail Us</h1>
      <form className="contact-us-form">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <textarea name="message" id rows={12} placeholder="Type your message here" defaultValue={""} />
        <div className="contact-us-form-actions">
          <input type="submit" className="button" defaultValue="Send it" />
          <div>
            <label htmlFor="FileUpload" className="button contact-us-file-button">Attach Files</label>
            <input type="file" id="FileUpload" className="show-for-sr" />
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

)
}


