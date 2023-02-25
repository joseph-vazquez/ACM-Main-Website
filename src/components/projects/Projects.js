import React from "react";
import firebase from "../professional-events/firebaseConfig.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Row,
  Col,
  Tab,
  Nav,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Projects.css";
import LegacyProject from "./LegacyProject";
import NewProject from "./NewProject";
import CurrentProjects from "./CurrentProjects.js";
import PastProjects from "./PastProjects.js";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjSem: "Current",
      currentProj: null,
      archiveProj: null,
    };
  }

  componentDidMount() {
    //this method call access all projects in reverse order
    //after sorting in reverse, latest projects is the first element
    firebase
      .firestore()
      .collection("project_workshop")
      .get()
      .then((snapshot) => {
        const project = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          project.push(data);
        });
        this.setState({ currentProjSem: project.reverse()[0].semester });
        this.setState({ currentProj: project.shift() });
        this.setState({ archiveProj: project });
        console.log(this.state.currentProj);
        console.log(this.state.currentProj.level.advanced.flyer);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="project-body">
        <div>
          <div className="project-title-text">
            <p>Looking for experience?</p>
            <p>Participate in our projects!</p>
          </div>
          <div className="project-title-card"></div>
        </div>
        {/*
                Remember to update dates in the disclaimer:
                1. Project signups open
                2. Signup deadline
                */}
        <div className="disclaimer-body">
          <h3 className="disclaimer_header mt-4 mb-4">
            <b>Disclaimers...</b>
          </h3>
          <div className="disclaimer">
            <b>
              1. You must be a member of ACM to participate in the projects! If
              you are not a member, you will not be allowed in.
            </b>
          </div>
          <br></br>
          <div className="disclaimer">
            <b>
              2. Space is limited, so admittance to these projects are first
              come, first served.
            </b>
          </div>
          <br></br>
          <div className="disclaimer">
            <b>
              3. Project signups open Thursday, January 26, 2023 and will close
              Tuesday, February 21, 2023.
            </b>
          </div>
        </div>
        {this.state.currentProj && this.state.archiveProj && (
          <Tab.Container defaultActiveKey={this.state.currentProjSem}>
            <Nav className="project-tab-label px-3 mx-auto" variant="pills">
              <NavDropdown className="archivedropdown btn-primary text-center" title="Archive" menuVariant="dark">
                {this.state.archiveProj.map((sem) => (
                  <NavDropdown.Item eventKey={sem.semester}>
                    {sem.semester}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  className="project-nav-link-tab"
                  eventKey={this.state.currentProjSem}
                >
                  {this.state.currentProjSem}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content id="main-content">
              <Tab.Pane eventKey={this.state.currentProjSem}>
                <CurrentProjects current={this.state.currentProj} />
              </Tab.Pane>
              {this.state.archiveProj.map((sem) => (
                <Tab.Pane eventKey={sem.semester} >
                  <PastProjects archive={sem}/>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        )}
      </div>
    );
  }
}

export default Projects;
