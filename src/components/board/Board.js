import React from "react";
import { Row, Col, Tab, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./board.css";
import firebase from "../professional-events/firebaseConfig.js";
import BoardLeaders from "./BoardLeaders";
import backdrop from "./img/bluebackdrop.jpg";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: null,
    };
  }

  componentDidMount() {
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
        this.setState({ currentBoard: board.reverse()[0] });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="board-header-container">
          <div id="board-header-title">
            The team that makes ACM special at CSULA...
            <br></br>
            Meet our leaders!
          </div>
        </div>
        <div className="leader-of-the-month ">
          <h2 className="leader-header">LEADERS OF THE MONTH</h2>
          <div className="col-leaders justify-content-center image-contain">
            <img
              className="board-leader-winner board-leader-profile"
              src={
                "https://firebasestorage.googleapis.com/v0/b/acm-calstatela.appspot.com/o/Leaders%202022-2023%2FRana.jpg?alt=media&token=05619266-f3b6-4452-b888-ea12dd45ca1f"
              }
              alt={"Leader of the Month"}
            ></img>
            <img
              className="board-leader-winner board-leader-profile"
              src={
                "https://firebasestorage.googleapis.com/v0/b/acm-calstatela.appspot.com/o/Leaders%202022-2023%2FJohn.jpg?alt=media&token=437f325c-daa9-4316-bf76-4cb1d980f6eb"
              }
              alt={"Leader of the Month"}
            ></img>
          </div>
          <h2 className="leader-info">Rana Ashour and John Hernandez</h2>
          <h2 className="leader-info">(February 2023)</h2>
        </div>
        {this.state.currentBoard && (
          <div className="boardcontainer container w-100">
            <h1 class="text-center py-5">
              ACM {this.state.currentBoard.schoolyear} Board
            </h1>
            <h2 class="groupheader">Board</h2>
            <div class="card-deck justify-content-center align-items-center mb-5">
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.president}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.vicepresident}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.secretary}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.treasurer}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.vp_affairs1}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.vp_affairs2}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.webmaster}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.proj_manager1}
              />
              <BoardLeaders
                leader={this.state.currentBoard.leaders.board.proj_manager2}
              />
            </div>
            <h2 class="groupheader">Officers</h2>
            <div class="card-deck justify-content-center align-items-center mb-5">
              {this.state.currentBoard.leaders.officers &&
                this.state.currentBoard.leaders.officers.map((group) =>
                  group.members.map((member) => (
                    <BoardLeaders leader={member} />
                  ))
                )}
            </div>
            <h2 class="groupheader">Committee</h2>
            <div class="card-deck justify-content-center align-items-center mb-5">
              {this.state.currentBoard.leaders.committee &&
                this.state.currentBoard.leaders.committee.map((group) =>
                  group.members.map((member) => (
                    <BoardLeaders leader={member} />
                  ))
                )}
            </div>
            <h2 class="groupheader">Advisors</h2>
            <div class="card-deck justify-content-center align-items-center mb-5">
              {this.state.currentBoard.leaders.advisors &&
                this.state.currentBoard.leaders.advisors.map((advisor) => (
                  <BoardLeaders leader={advisor} />
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Board;

