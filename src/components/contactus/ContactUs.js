import React from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css";

//function to send email taken from emailjs
//note: emailjs only provides 200 free email sends per month
//Send email functionality doesn't count number of emails sent per month, but
//highly unlikely that an attacker would spam our email to reach the 200 threshold
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_bn6s6cv",
      "template_wmv971n",
      e.target,
      "dy_stPW0PkeIdNTfv"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
      e.target.reset()
    );
};

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us-page">
        <div className="text-white">
          <div>
            <div className="header-text">
              <p>Ask us if you have any <br />questions or comments!</p>
            </div>
            <div className="contact-header"></div>
          </div>
        </div>

        <div className="contact-us-card">
          <div className="contact-us-block mx-auto ">
            <h1 className=" text-center pt-2 mt-2">CONTACT US</h1>
            <form className="mt-4" onSubmit={sendEmail}>
              <div className="txtb">
                <label for="name" className="contact-label">
                  Full Name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="card-bg text-left"
                  placeholder="Enter your name"
                />
              </div>
              <div className="txtb">
                <label for="email" className="contact-label">
                  Email:{" "}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="card-bg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="txtb">
                <label for="phoneNo" className="contact-label">
                  Phone Number :
                </label>
                <input
                  type="text"
                  id="phoneNo"
                  name="phone_number"
                  className="card-bg"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="txtb">
                <label for="message" className="contact-label">
                  Message:{" "}
                </label>
                <textarea
                  id="body"
                  name="message"
                  className="card-bg"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <input type="submit" value="Send" id="btn-form" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
