import React, { Component } from "react";
import firebase from "../../professional-events/firebaseConfig.js";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import "./impAnnouncements.scss";

class ImpAnnouncements extends Component {
  state = {
    upcomingEvent: null,
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection("upcomingEvents")
      .get()
      .then((snapshot) => {
        const events = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        this.setState({ upcomingEvent: events });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let eventPosters = [
      "./images/spring2023-pro-dev.png",
    ];

    let links = [
      "https://forms.gle/hAjvNSbS47ghMxuE8",
    ];

    return (
      <section className="impAnnouncements-tease">
        <div className="content">
          <div className="title mt-4 mb-5">Academic Year 2022-2023</div>
          <div className="video-header">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6E9kewdhFvU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="description mt-3">
            <p>
              Communications will be done via email, Discord, and social media
            </p>
          </div>
          
        </div>
      </section>
    );
  }
}

export default ImpAnnouncements;
