import React from "react";
import "./professional.css";
import firebase from "./firebaseConfig.js";
import { Card, Button, Image } from "react-bootstrap";

/*
To install, go to project directory and run this on command line:
$ npm install react-multi-carousel --save
*/
//Imports for multi carousel
import "react-multi-carousel/lib/styles.css";

// This component won't hold a state for not but decided
// to make it into a Class component for now

class Professional extends React.Component {
  state = {
    semesterEvent: null,
    upcomingEvent: null,
    seeMore: false,
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection("semesterEvents")
      .get()
      .then((snapshot) => {
        const events = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
        });
        this.setState({ semesterEvent: events });
      })
      .catch((error) => console.log(error));

    firebase
      .firestore()
      .collection("upcomingEvents")
      .get()
      .then((snapshot) => {
        const comingUpEvent = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          comingUpEvent.push(data);
        });
        this.setState({ upcomingEvent: comingUpEvent });
      })
      .catch((error) => console.log(error));
  }

  test() {
    alert("Show Modal!");
  }

  render() {
    return (
      <div className="events-container">
        <div className="events-header-container">
          <div id="events-header-title">Events</div>
          <div id="events-blur-effect"></div>
        </div>

        <div className="upcoming-events mx-auto mb-5">
          <p className="text-center m-3 events-header">Upcoming Events</p>
          <div className="d-flex flex-wrap justify-content-center m-2">
            {this.state.upcomingEvent &&
              this.state.upcomingEvent.map((upcomingEvents) => {
                return (
                  <Card
                    style={{ width: "24rem", padding: "10px", margin: "2em" }}
                  >
                    <center>
                      <img
                        style={{ height: "30rem", padding: "10px" }}
                        src={upcomingEvents.imgUrl}
                        alt="Upcoming event"
                      />
                      {/* <p>Sign up starts: {upcomingEvents.signUpStart}</p>
                      <p>Sign up Deadline: {upcomingEvents.deadline}</p>
                      <Button href={upcomingEvents.link}>RSVP</Button> */}
                    </center>
                  </Card>
                );
              })}
          </div>
        </div>
        <hr
          style={{
            color: "#ffffff",
            backgroundColor: "#ffffff",
            height: 0.5,
            borderColor: "#ffffff",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />

        <div className="semester-events mx-auto mb-5">
          <p className="text-center m-3 events-header">Semester Events</p>
          <div className="d-flex flex-wrap justify-content-center m-2">
            {this.state.semesterEvent &&
              this.state.semesterEvent.map((semesterEvents) => {
                return (
                  <Card
                    style={{ width: "24rem", padding: "10px", margin: "2em" }}
                    onLoad
                  >
                    <center>
                      <img
                        style={{ height: "30rem", padding: "10px" }}
                        src={semesterEvents.imgUrl}
                        alt="Current event"
                      />
                      {semesterEvents.signUpLink != null && (
                        <Button href={semesterEvents.signUpLink}>
                          Sign Up
                        </Button>
                      )}
                    </center>
                  </Card>
                );
              })}
          </div>
        </div>
        <hr
          style={{
            color: "#ffffff",
            backgroundColor: "#ffffff",
            height: 0.5,
            borderColor: "#ffffff",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />

        {/* <Row className="col-5">
            <div className="events-header">Past Events</div>
          </Row> */}
        {/* <Row className="justify-content-md-center"> */}
        <div className="past-events mx-auto">
          <p className="text-center events-header">Past Events</p>
          <div class="professional-slideshow">
            <div class="images">
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/google-ama-event-fall-2022.jpg")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/Hackathon-Flyer-Fall-2022.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/Mentorship-fall-2022.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/Black-Panther-Wakanda-Forever-fall-2022.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/github-workshop.PNG")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/mwd-jpl-spring-2019.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/spring-2019-resume-workshop.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/richard-fung-2018-google.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/internship.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/manny-sanchez-lockheed-spring-2019.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/linkedin-handshake-workshop.png")}
                thumbnail
              />
              <Image
                style={{ width: "350px", height: "30rem", margin: "1em" }}
                src={require("./images/google-ama-event-fall-2022.jpg")}
                thumbnail
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
