import React from "react";
import { useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Collapse,
  Container,
  Carousel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./PastProjects.css";
class PastProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedProj: props.archive,
      currentYear: props.archive.semester,

      begOpen: false,
      advOpen: false,
    };
  }
  changeYear = (sem) => {
    this.setState({ currentYear: sem });
  };

  render() {
    return (
      <Container>
        <Row>
        <div id="past-header" class="projectheader container-fluid text-center py-4">
          <h1>{this.state.archivedProj.semester} (Archive)</h1>
        </div>
          <Col md={6}>
            <Card
              border="secondary"
              className="cardbody archive-card text-center"
              style={{ transform: this.state.begOpen ? "rotateY(180deg)" : "none" }}
            >
              <div class="thefront">
                <Card.Title className="shadow mt-3">
                  Beginners Workshop
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={this.state.archivedProj.level.beginners.flyer}
                  class="archive-flyer img-thumbnail shadow-lg mb-2 bg-white rounded"
                />
                <Card.Body>
                  <Button
                    variant="success"
                    size="md"
                    onClick={() => this.setState({begOpen: !this.state.begOpen})}
                  >
                    More info
                  </Button>
                </Card.Body>
              </div>
              <div class="theback">
                <div class="skills-section my-4">
                  <h4 class="skill-header">Skills:</h4>
                  {this.state.archivedProj.level.beginners.skills.map((skill) => (
                    <div>
                      <Icon.CaretRightFill className="d-inline" />
                      <span>{skill}</span>
                      <Icon.CaretLeftFill className="d-inline" />
                    </div>
                  ))}
                </div>
                <div class="leaders-section">
                  <h4 class="leaders-header">Leaders:</h4>
                  <Carousel className="leadercarousel">
                    {this.state.archivedProj.level.beginners.leaders.map(
                      ({ img, name }) => (
                        <Carousel.Item>
                          <img src={img}></img>
                          <Carousel.Caption>
                            <h4 class="leadername">{name}</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
                      )
                    )}
                  </Carousel>
                </div>
                <Card.Footer>
                  <Button
                    variant="success"
                    size="md"
                    onClick={() => this.setState({begOpen: !this.state.begOpen})}
                  >
                    back
                  </Button>
                </Card.Footer>
              </div>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              border="secondary"
              className="cardbody archive-card text-center"
              style={{ transform: this.state.advOpen ? "rotateY(180deg)" : "none" }}
            >
              <div class="thefront">
                <Card.Title className="shadow mt-3">
                  Advanced Workshop
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={this.state.archivedProj.level.advanced.flyer}
                  class="archive-flyer img-thumbnail shadow-lg mb-2 bg-white rounded"
                />
                <Card.Body>
                  <Button
                    variant="success"
                    size="md"
                    onClick={() => this.setState({advOpen: !this.state.advOpen})}
                  >
                    More info
                  </Button>
                </Card.Body>
              </div>
              <div class="theback">
                <div class="skills-section my-4">
                  <h4 class="skill-header">Skills:</h4>
                  {this.state.archivedProj.level.advanced.skills.map((skill) => (
                    <div>
                      <Icon.CaretRightFill className="d-inline" />
                      <span>{skill}</span>
                      <Icon.CaretLeftFill className="d-inline" />
                    </div>
                  ))}
                </div>
                <div class="leaders-section">
                  <h4 class="leaders-header">Leaders:</h4>
                  <Carousel className="leadercarousel">
                    {this.state.archivedProj.level.advanced.leaders.map(
                      ({ img, name }) => (
                        <Carousel.Item>
                          <img src={img}></img>
                          <Carousel.Caption>
                            <h4 class="leadername">{name}</h4>
                          </Carousel.Caption>
                        </Carousel.Item>
                      )
                    )}
                  </Carousel>
                </div>
                <Card.Footer>
                  <Button
                    variant="success"
                    size="md"
                    onClick={() => this.setState({advOpen: !this.state.advOpen})}
                  >
                    back
                  </Button>
                </Card.Footer>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PastProjects;
