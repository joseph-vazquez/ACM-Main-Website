import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import "./archiveproj.css";
import { Github } from "react-bootstrap-icons";
const ArchiveProj = (props) => {
  return (
    <Container className="py-5 ">
      <Row id="archive-row" className="justify-content-center">
        <h3 class="col-12" align="center">Projects from past semesters:</h3>
        <Col md={8}>
          <Table striped hover variant="dark">
            <thead>
              <tr>
                <th>Semester</th>
                <th>Beginners</th>
                <th>Advanced</th>
              </tr>
            </thead>
            <tbody>
              {props.archive.map((sem) => (
                <tr>
                  <td>{sem.semester}</td>
                  <td>
                    <Github className="mr-3" />
                    <span>{sem.level.beginners.title}</span>
                    <Button variant="success">Play demo</Button>
                  </td>
                  <td>
                    <Github className="mr-3" />
                    <span>{sem.level.advanced.title}</span>
                    <Button variant="success">Play demo</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ArchiveProj;
