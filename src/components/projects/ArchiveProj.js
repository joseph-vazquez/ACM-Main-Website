import React from "react";
import { useState } from "react";
import { Container, Row, Table, Col, Button, Modal } from "react-bootstrap";
import "./archiveproj.css";
import { Github } from "react-bootstrap-icons";
const ProjModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.data && (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.data.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{/**Description here */}</p>
            {props.data.flyer && (
              <a
                href={props.data.flyer}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
              >
                View Flyer
              </a>
            )}
            <h4>Skills learned:</h4>
            <ul>
              {props.data.skills.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <h4>Project leaders:</h4>
            <ul>
              {props.data.leaders.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

const ArchiveProj = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProj, setSelected] = useState(null);

  const selectHandler = (data) => {
    setModalShow(true);
    setSelected(data);
  };
  return (
    <Container className="py-5 ">
      <Row id="archive-row" className="justify-content-center">
        <h3 class="col-12" align="center">
          Projects from past semesters:
        </h3>
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
                    {/*
                    
                    <Github className="mr-3" />
                    */}
                    <a
                      onClick={() => {
                        selectHandler(sem.level.beginners);
                      }}
                      style={{ cursor: "pointer" }}
                      class="mx-2"
                    >
                      {sem.level.beginners.title}
                    </a>
                    {sem.level.beginners.demoURL && (
                      <Button
                        href={sem.level.beginners.demoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="success"
                      >
                        Play demo
                      </Button>
                    )}
                  </td>
                  <td>
                    {/*
                    
                    <Github className="mr-3" />
                    */}
                    <a
                      onClick={() => {
                        selectHandler(sem.level.advanced);
                      }}
                      style={{ cursor: "pointer" }}
                      class="mx-2"
                    >
                      {sem.level.advanced.title}
                    </a>
                    {sem.level.advanced.demoURL && (
                      <Button
                        href={sem.level.advanced.demoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="success"
                      >
                        Play demo
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <ProjModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={selectedProj}
      />
    </Container>
  );
};

export default ArchiveProj;
