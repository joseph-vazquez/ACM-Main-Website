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
          <div className="description border-bottom mt-3">
            <p>
              Communications will be done via email, Discord, and social media
            </p>
          </div>
          <br></br>

          <Row id="event-container">
            <Col md={6} id="upcoming-flyer" class="text-center">
              <div className="event-section">
                <h1 className="upcoming-title">Upcoming events</h1>
                <p className="event-description">
                  Don't miss out on these events! See our
                  <br />
                  calendar for more details.
                </p>
                <Carousel infiniteLoop className="flyer-container">
                  {this.state.upcomingEvent &&
                    this.state.upcomingEvent.map((upComingEvents) => {
                      return (
                        <div>
                          <img
                            className="carousel-event-image"
                            src={upComingEvents.imgUrl}
                            alt={upComingEvents.altText}
                          />
                        </div>
                      );
                    })}
                </Carousel>
              </div>
            </Col>
            <Col md={6} id="featured-flyer" class="text-center">
              <div className="event-section">
                <h1 className="featured-title">Featured Events</h1>
                <p className="event-description">
                  Stay tuned for Fall 2023
                </p>
                {/*
                <Carousel infiniteLoop className="flyer-container">
                  {eventPosters.map((value, index) => {
                    return (
                      <div>
                        <img
                          className="carousel-event-image"
                          src={require("" + value)}
                          alt="event"
                        />
                        <Button
                          href={links[index]}
                          style={{ backgroundColor: "#0A84FF" }}
                        >
                          Apply Now!
                        </Button>
                      </div>
                    );
                  })}
                </Carousel>
                */}
                
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default ImpAnnouncements;
