import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="row contactRow">
        <div className="col-xs-10 col-xs-offset-1">
          <h1>Hit me up!</h1>
          <form action="https://formspree.io/andi.idavis@gmail.com"
            method="POST">
            <input className="formInputs" type="text" placeholder="Name" name="name" />
            <input className="formInputs" type="email" placeholder="Email" name="_replyto" />
            <textarea className="formInputs messageBox" type="text" placeholder="Message" name="message" rows="5" />
            <input className="formInputs" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;