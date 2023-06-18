import React from "react";
import { useEffect, useState } from "react";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import firebase from "../professional-events/firebaseConfig.js";
import logo from "./img/acm_logo.png";
import BoardLeaders from "./BoardLeaders";
const NewBoard = () => {
  const [currentBoard, setBoard] = useState(null);
  useEffect(() => {
    firebase
      .firestore()
      .collection("acm_board")
      .get()
      .then((snapshot) => {
        const board = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          board.push(data);
        });
        setBoard(board.reverse()[0]);
      })
      .catch((error) => console.log(error));

    return () => {
      setBoard({});
    };
  }, []);

  return (
    <div>
      <div className="board-header-container">
        <div id="board-header-title">
          The team that makes ACM special at CSULA
          <br></br>
          Meet our leaders!
        </div>
      </div>
      {currentBoard && (
        <div class="boardcontainer pt-3">
          <h1 class="mx-auto text-light py-3" align="center">
            ACM Leaders of {currentBoard.schoolyear}
          </h1>
          <div class="bottomheader mx-auto" align="center"></div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="board">
            <Row className="mx-auto">
              <Col md={3}>
                <Nav
                  variant="pills"
                  className="board-tab-container flex-column"
                >
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="board">Board</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="officer">Officers</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="committee">Committees</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="board-tab">
                    <Nav.Link eventKey="advisor">Advisors</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9}>
                <Tab.Content className="m-0 w-100">
                  <Tab.Pane eventKey="board">
                    <h2 class="groupheader text-light">Board</h2>
                    <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                      <BoardLeaders
                        leader={currentBoard.leaders.board.president}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.vicepresident}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.secretary}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.treasurer}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.vp_affairs1}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.vp_affairs2}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.webmaster}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.proj_manager1}
                      />
                      <BoardLeaders
                        leader={currentBoard.leaders.board.proj_manager2}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="officer">
                    <h2 class="groupheader text-light">Officers</h2>
                    <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                      {currentBoard.leaders.officers &&
                        currentBoard.leaders.officers.map((group) =>
                          group.members.map((member) => (
                            <BoardLeaders leader={member} />
                          ))
                        )}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="committee">
                    {currentBoard.leaders.committee &&
                      currentBoard.leaders.committee.map((group) => (
                        <>
                          <h3 class="text-light" align="center">{group.role_group}</h3>
                          <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                            {group.members.map((member) => (
                              <BoardLeaders leader={member} />
                            ))}
                          </div>
                        </>
                      ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="advisor">
                    <h2 class="groupheader text-light">Advisors</h2>
                    <div class="card-deck justify-content-center align-items-center mb-5 text-light">
                      {currentBoard.leaders.advisors &&
                        currentBoard.leaders.advisors.map((advisor) => (
                          <BoardLeaders leader={advisor} />
                        ))}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      )}
    </div>
  );
};

export default NewBoard;
