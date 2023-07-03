import React from "react";
import { Container, Table } from "react-bootstrap";

const ArchiveProj = (props) => {
  return (
    <Container>
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
              <td>{sem.level.advanced.title}</td>
              <td>{sem.level.beginners.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ArchiveProj;
