import React from "react";
import { Row, Col, Tab, Dropdown, DropdownButton } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.css";
import "./board.css";

import BoardLeaders from "./BoardLeaders";
import IMAGES from "./BoardImage.js";

const boardYears = [
  ["first", "2022-2023"],
  ["second", "2021-2022"],
  ["third", "2020-2021"],
  ["fourth", "2019-2020"],
  ["fifth", "2018-2019"],
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: boardYears[0][1],
    };
  }

  /*This function updates the text of the dropdown button*/
  changeYear = (sem) => {
    this.setState({ currentYear: sem });
  };
  state = {
    currentYear: boardYears[0][1],
  };

  render() {
    return (
      <div>
        <div>
          <div className="board-text">
            <p>
              The team that makes ACM special at CSULA...
              <br />
              Meet our Leaders!
            </p>
          </div>
          <div className="board-card"></div>
        </div>

        <div className="body container">
          <Jumbotron className="row leaders-div">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col sm={3}>
                <div class="select-year-tab">
                  <div class="select-year-text">Select Year:</div>
                  <DropdownButton
                    title={this.state.currentYear}
                    id="dropdown-button"
                    menuVariant="dark"
                    className="ms-2"
                  >
                    {boardYears.map((year) => (
                      <Dropdown.Item
                        eventKey={year[0]}
                        onClick={(e) => this.changeYear(e.target.textContent)}
                        className="item-dropdown"
                      >
                        {year[1]}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
              </Col>
              <Row>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Tab.Container>
                        <div className="row-leaders all-row-leaders">
                          <h2 className="leader-header">LEADER OF THE MONTH</h2>
                          <div className="col-leaders justify-content-center image-contain">
                            <img
                              className="board-leader-winner board-leader-profile"
                              src={IMAGES.Nshan2022}
                              alt={"Leader of the Month"}
                            ></img>
                          </div>
                          <h2 className="leader-info">Nshan Kazaryan</h2>
                          <h2 className="leader-info">(November 2022)</h2>
                        </div>
                      </Tab.Container>
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">
                          ACM 2022-2023 BOARD
                        </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Ashley2022}
                            firstName="Ashley"
                            lastName="Tran"
                            year="2022"
                            position="President"
                          />
                          <BoardLeaders
                            photo={IMAGES.Branden2022}
                            firstName="Branden"
                            lastName="Zamora"
                            year="2022"
                            position="Vice President"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Alexander2022}
                            firstName="Alexander"
                            lastName="Vazquez"
                            year="2022"
                            position="Treasurer"
                          />
                          <BoardLeaders
                            photo={IMAGES.Andres2022}
                            firstName="Andres"
                            lastName="Dominguez"
                            year="2022"
                            position="Secretary"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Rana2022}
                            firstName="Rana"
                            lastName="Ashour"
                            year="2022"
                            position="VP of Internal/External Affairs"
                            linkedin="https://www.linkedin.com/in/rana-ashour-697684247"
                            email="mailto:ranaashour3@gmail.com"
                          />
                          <BoardLeaders
                            photo={IMAGES.John2023}
                            firstName="John"
                            lastName="Paolo"
                            year="2023"
                            position="Webmaster"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Jonathan2022}
                            firstName="Jonathan"
                            lastName="Dang"
                            year="2022"
                            position="Project Manager: Beginners"
                          />
                          <BoardLeaders
                            photo={IMAGES.Isabella2022}
                            firstName="Isabella"
                            lastName="Arreguin"
                            year="2023"
                            position="Project Manger: Advanced"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          {/* <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2022" position="VP of Internal Affairs" /> */}
                          {/* <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2022" position="VP of External Affairs" /> */}
                        </div>
                      </div>
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">
                          OFFICERS
                        </h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Daniel2022}
                            firstName="Daniel"
                            lastName="Ramirez"
                            year="2022"
                            position="Executive Officer"
                          />
                          <BoardLeaders
                            photo={IMAGES.Joseph2022}
                            firstName="Joseph"
                            lastName="Acosta"
                            year="2023"
                            position="Executive Officer"
                            linkedin="www.linkedin.com/in/joseph-acosta-14ja2810"
                            email="mailto:josephaacosta1527@gmail.com"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Keyvan2022}
                            firstName="Keyvan"
                            lastName="Kani"
                            year="2023"
                            position="Executive Officer"
                            linkedin="https://www.linkedin.com/in/keyvan-mahmoodzadeh-kani/"
                            email="mailto:arasanjkk@gmail.com"
                          />
                          <BoardLeaders
                            photo={IMAGES.Liana2022}
                            firstName="Liana"
                            lastName="Zhu"
                            year="2022"
                            position="Web Officer"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          
                        </div>
                        <div className="row-leaders centered-leader">
                          {/* <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2022" position="Finance Officer" /> */}
                          {/* <BoardLeaders photo={IMAGES.Vacant} firstName="Vacant" lastName="" year="2022" position="Administrative Officer" /> */}
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">
                          COMMITTEE
                        </h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Mike2022}
                            firstName="Mike"
                            lastName="De Pacina"
                            year="2022"
                            position="Web Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Brian2023}
                            firstName="Brian"
                            lastName="Pham"
                            year="2023"
                            position="Web Committee"
                            linkedin="https://www.linkedin.com/in/brian-pham-a5674b163/"
                            email="mailto:bpham23@calstatela.edu"
                            github="https://github.com/BPhi-ai"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Charlie2022}
                            firstName="Charlie"
                            lastName="Dominguez"
                            year="2022"
                            position="Project Committee"
                            linkedin="https://www.linkedin.com/in/charlie-martinez-dominguez-42aa461a8/"
                            email="mailto:cherlescenter@gmail.com"
                          />
                          <BoardLeaders
                            photo={IMAGES.Ricardo2022}
                            firstName="Ricardo"
                            lastName="Miranda"
                            year="2022"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Shambhavi2022}
                            firstName="Shambhavi"
                            lastName="Bhandari"
                            year="2022"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Fabricio2022}
                            firstName="Fabricio"
                            lastName="Reyes"
                            year="2022"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Muhammad2022}
                            firstName="Muhammad"
                            lastName="Islam"
                            year="2022"
                            position="Project Committee"
                            linkedin="https://www.linkedin.com/mwlite/in/md-islam17"
                            email="mailto:2003raisul@gmail.com"
                          />
                          <BoardLeaders
                            photo={IMAGES.Steven2022}
                            firstName="Steven"
                            lastName="Lopez"
                            year="2022"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Diane2022}
                            firstName="Diane"
                            lastName="Tabilas"
                            year="2022"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.James2022}
                            firstName="James"
                            lastName="Ybarra"
                            year="2023"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.ACMLogo}
                            firstName="Norma"
                            lastName="Argueta"
                            year="2023"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Ulises2022}
                            firstName="Ulises"
                            lastName="Gutierrez"
                            year="2022"
                            position="Innovation Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Ivan2022}
                            firstName="Ivan"
                            lastName="Ho"
                            year="2022"
                            position="Innovation Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Sahis2023}
                            firstName="Sahis"
                            lastName="Neupane"
                            year="2023"
                            position="Innovation Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Sergio2023}
                            firstName="Sergio"
                            lastName="Valadez"
                            year="2023"
                            position="Innovation Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.ACMLogo}
                            firstName="Veronica"
                            lastName="Barragan"
                            year="2022"
                            position="Design Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Thien2023}
                            firstName="Thien"
                            lastName="Ho"
                            year="2023"
                            position="Finance Committee"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">ADVISORS</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.ACMLogo}
                            firstName="Weronika"
                            lastName="Cwir"
                            year="2022"
                            position="Chapter Advisor"
                          />
                          <BoardLeaders
                            photo={IMAGES.ACMLogo}
                            firstName="Richard"
                            lastName="Cross"
                            year="2022"
                            position="Chapter Advisor"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Wilson2021}
                            firstName="Wilson"
                            lastName="Thomas"
                            year="2022"
                            position="Chapter Advisor"
                          />
                          <BoardLeaders
                            photo={IMAGES.Alvin2021}
                            firstName="Alvin"
                            lastName="Lew"
                            year="2022"
                            position="Student Advisor"
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">
                          ACM 2021-2022 BOARD
                        </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Alvin2021}
                            firstName="Alvin"
                            lastName="Lew"
                            year="2021"
                            position="President"
                          />
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Vacant"
                            lastName=""
                            year=""
                            position="Vice President"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Ashley2021}
                            firstName="Ashley"
                            lastName="Tran"
                            year="2021"
                            position="Treasurer"
                          />
                          <BoardLeaders
                            photo={IMAGES.Sebastian2021}
                            firstName="Sebastian"
                            lastName="Luna"
                            year="2021"
                            position="Secretary"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Vacant"
                            lastName=""
                            year="2021"
                            position="Project Manager"
                          />
                          <BoardLeaders
                            photo={IMAGES.Anthony2020}
                            firstName="Anthony"
                            lastName="Viramontes"
                            year="2021"
                            position="Webmaster"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Vacant"
                            lastName=""
                            year="2021"
                            position="VP of Internal Affairs"
                          />
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Vacant"
                            lastName=""
                            year="2021"
                            position="VP of External Affairs"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">
                          OFFICERS
                        </h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Branden2021}
                            firstName="Branden"
                            lastName="Zamora"
                            year="2021"
                            position="Finance Officer"
                          />
                          <BoardLeaders
                            photo={IMAGES.Alexander2021}
                            firstName="Alexander"
                            lastName="Vazquez"
                            year="2021"
                            position="Executive Officer"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Patrick2021}
                            firstName="Patrick"
                            lastName="Sangalang"
                            year="2021"
                            position="Web Officer"
                          />
                          <BoardLeaders
                            photo={IMAGES.Nshan2021}
                            firstName="Nshan"
                            lastName="Kazaryan"
                            year="2021"
                            position="Project Officer"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Daniel2021}
                            firstName="Daniel"
                            lastName="Ramirez"
                            year="2021"
                            position="Administrative Officer"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">
                          COMMITTEE
                        </h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Tracy2021}
                            firstName="Tracy"
                            lastName="Truong"
                            year="2021"
                            position="Design Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Lillian2021}
                            firstName="Lillian"
                            lastName="Leung"
                            year="2021"
                            position="Design Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Fabio"
                            lastName="Carrasco"
                            year="2021"
                            position="Web Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Ryan2021}
                            firstName="Ryan"
                            lastName="Lee"
                            year="2021"
                            position="Web Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Lloyd2021}
                            firstName="Lloyd"
                            lastName="Castro"
                            year="2021"
                            position="Web Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Max"
                            lastName="Guzman"
                            year="2021"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Sean2021}
                            firstName="Sean"
                            lastName="Chung"
                            year="2021"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Gerardo2021}
                            firstName="Gerardo"
                            lastName="Ibarra"
                            year="2021"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Roberto2021}
                            firstName="Roberto"
                            lastName="Ruiz-Garcia"
                            year="2021"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Jose2021}
                            firstName="Jose"
                            lastName="Zamora"
                            year="2021"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader"></div>
                        <div className="row-leaders centered-leader"></div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">ADVISORS</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Weronika2021}
                            firstName="Weronika"
                            lastName="Cwir"
                            year="2021"
                            position="Faculty Advisor"
                          />
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Keenan"
                            lastName="Knaur"
                            year="2021"
                            position="Faculty Advisor"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Wilson2021}
                            firstName="Wilson"
                            lastName="Thomas"
                            year="2020"
                            position="Advisor"
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader all-row-leaders">
                          ACM 2020-2021 BOARD
                        </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Srivats2020}
                            firstName="Srivats"
                            lastName="Venkataraman"
                            year="2020"
                            position="President"
                          />
                          <BoardLeaders
                            photo={IMAGES.Grace2020}
                            firstName="Grace"
                            lastName="Lin"
                            year="2020"
                            position="Vice President"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Nidhi2020}
                            firstName="Nidhi"
                            lastName="Lakshmanan"
                            year="2020"
                            position="Treasurer"
                          />
                          <BoardLeaders
                            photo={IMAGES.Elton2020}
                            firstName="Elton"
                            lastName="Lin"
                            year="2020"
                            position="Secretary"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Rita2020}
                            firstName="Rita"
                            lastName="Sanchez"
                            year="2020"
                            position="VP of Internal Affairs"
                          />
                          <BoardLeaders
                            photo={IMAGES.Grover2020}
                            firstName="John"
                            lastName="Grover"
                            year="2020"
                            position="VP of External Affairs"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Luis2020}
                            firstName="Luis"
                            lastName="Gonzalez"
                            year="2020"
                            position="Project Manager"
                          />
                          <BoardLeaders
                            photo={IMAGES.DavidT2020}
                            firstName="David"
                            lastName="Tang"
                            year="2020"
                            position="Webmaster"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Julio2020}
                          firstName="Julio"
                          lastName="Santamaria"
                          year="2020"
                          position="Social Media Officer"
                        />
                        <BoardLeaders
                          photo={IMAGES.Anthony2020}
                          firstName="Anthony"
                          lastName="Viramontes"
                          year="2020"
                          position="Web Officer"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Alvin2020}
                          firstName="Alvin"
                          lastName="Lew"
                          year="2020"
                          position="Project Officer"
                        />
                        <BoardLeaders
                          photo={IMAGES.Jorge2020}
                          firstName="Jorge"
                          lastName="Mata"
                          year="2020"
                          position="Project Officer"
                        />
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Tracy2020}
                            firstName="Tracy"
                            lastName="Truong"
                            year="2020"
                            position="Design Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.DavidM2020}
                            firstName="David"
                            lastName="Melendez"
                            year="2020"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Gregory2020}
                            firstName="Gregory"
                            lastName="Celestino"
                            year="2020"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Lillian2020}
                            firstName="Lillian"
                            lastName="Leung"
                            year="2020"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Omar2020}
                            firstName="Omar"
                            lastName="Eclicerio"
                            year="2020"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Robert2020}
                            firstName="Robert"
                            lastName="de la Costa"
                            year="2020"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Sameen2020}
                            firstName="Sameen"
                            lastName="Khan"
                            year="2020"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Adrian2020}
                            firstName="Adrian"
                            lastName="Lopez"
                            year="2020"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Daniel2020}
                            firstName="Daniel"
                            lastName="Ramirez"
                            year="2020"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Erica2020}
                            firstName="Erica"
                            lastName="Santos"
                            year="2020"
                            position="Project Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Sean2020}
                            firstName="Sean"
                            lastName="Chung"
                            year="2020"
                            position="Project Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Ralph2020}
                            firstName="Ralph"
                            lastName="Belleca"
                            year="2020"
                            position="Web Committee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Kenny"
                            lastName="Luong"
                            year="2020"
                            position="Web Comittee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Patrick2021}
                            firstName="Patrick"
                            lastName="Sangalang"
                            year="2020"
                            position="Web Comittee"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Sebastian"
                            lastName="Luna"
                            year="2020"
                            position="General Committee"
                          />
                          <BoardLeaders
                            photo={IMAGES.Vacant}
                            firstName="Ashley"
                            lastName="Tran"
                            year="2020"
                            position="Finance Committee"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <h2 className="h2-leaders all-row-leaders">ADVISORS</h2>
                      </div>
                      <div className="all-row-leaders">
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Randy2020}
                            firstName="Randal"
                            lastName="Moss"
                            year="2020"
                            position="Faculty Advisor"
                          />
                          <BoardLeaders
                            photo={IMAGES.Wilson2020}
                            firstName="Wilson"
                            lastName="Thomas"
                            year="2020"
                            position="Advisor"
                          />
                        </div>
                        <div className="row-leaders centered-leader">
                          <BoardLeaders
                            photo={IMAGES.Kalvin2020}
                            firstName="Kalvin"
                            lastName="Mateo"
                            year="2020"
                            position="Advisor"
                          />
                          <BoardLeaders
                            photo={IMAGES.Cristian2020}
                            firstName="Cristain"
                            lastName="Corrales"
                            year="2020"
                            position="Advisor"
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2019-2020 BOARD
                        </h2>
                      </div>
                      {/* Fixed format (alignment) of leaders by adding "centered-leader" to class name of each row*/}
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Kalvin2019}
                          firstName="Kalvin"
                          lastName="Mateo"
                          year="2019"
                          position="President"
                        />
                        <BoardLeaders
                          photo={IMAGES.Cristian2019}
                          firstName="Cristian"
                          lastName="Corrales"
                          year="2019"
                          position="Vice President"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.GeovannyH2019}
                          firstName="Geovanny"
                          lastName="Huerta"
                          year="2019"
                          position="Treasurer"
                        />
                        <BoardLeaders
                          photo={IMAGES.Srivats2019}
                          firstName="Srivats"
                          lastName="Venkataraman"
                          year="2019"
                          position="Secretary"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.GioC2019}
                          firstName="Giovanni"
                          lastName="Castellanos"
                          year="2019"
                          position="VP of Internal Affairs"
                        />
                        <BoardLeaders
                          photo={IMAGES.Vacant}
                          firstName="Vacant"
                          lastName=""
                          year="2019"
                          position="VP of External Affairs"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Andrew2019}
                          firstName="Andrew"
                          lastName="Gonzalez"
                          year="2019"
                          position="Project Manager"
                        />
                        <BoardLeaders
                          photo={IMAGES.Vacant}
                          firstName="Vacant"
                          lastName=""
                          year="2019"
                          position="Webmaster"
                        />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Elton2019}
                          firstName="Elton"
                          lastName="Lin"
                          year="2019"
                          position="Administative Officer"
                        />
                        <BoardLeaders
                          photo={IMAGES.Diego2019}
                          firstName="Diego"
                          lastName="Flores"
                          year="2019"
                          position="Finance Officer"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.DavidT2019}
                          firstName="David"
                          lastName="Tang"
                          year="2019"
                          position="Web Officer"
                        />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Deric2019}
                          firstName="Deric"
                          lastName="Kwok"
                          year="2019"
                          position="General Committee"
                        />
                        <BoardLeaders
                          photo={IMAGES.Ayush2019}
                          firstName="Ayush"
                          lastName="Singh"
                          year="2019"
                          position="Outreach Committee"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Kevin2019}
                          firstName="Kevin"
                          lastName="Flores"
                          year="2019"
                          position="Outreach Committee"
                        />
                        <BoardLeaders
                          photo={IMAGES.Grover2019}
                          firstName="John"
                          lastName="Grover"
                          year="2019"
                          position="Project Committee"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Luis2019}
                          firstName="Luis"
                          lastName="Gonzalez"
                          year="2019"
                          position="Project Committee"
                        />
                        <BoardLeaders
                          photo={IMAGES.George2019}
                          firstName="George"
                          lastName="Chan"
                          year="2019"
                          position="Web Committee"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Ralph2019}
                          firstName="Ralph"
                          lastName="Belleca"
                          year="2019"
                          position="Web Committee"
                        />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">ADVISORS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Randy2019}
                          firstName="Randal"
                          lastName="Moss"
                          year="2019"
                          position="Advisor"
                        />
                        <BoardLeaders
                          photo={IMAGES.Wilson2019}
                          firstName="Wilson"
                          lastName="Thomas"
                          year="2019"
                          position="Advisor"
                        />
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <div className="row">
                        <div className="board d-lg-none"></div>
                        <h2 className="h2-leaders centered-leader">
                          ACM 2018-2019 BOARD
                        </h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Wilson2018}
                          firstName="Wilson"
                          lastName="Thomas"
                          year="2019"
                          position="President"
                        />
                        <BoardLeaders
                          photo={IMAGES.Pranil2018}
                          firstName="Pranil"
                          lastName="Dahal"
                          year="2019"
                          position="Vice President"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.DavidS2018}
                          firstName="David"
                          lastName="San"
                          year="2019"
                          position="Treasurer"
                        />
                        <BoardLeaders
                          photo={IMAGES.GeovannyH2018}
                          firstName="Geovanny"
                          lastName="Huerta"
                          year="2019"
                          position="Secretary"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.GioG2018}
                          firstName="Giovanni"
                          lastName="Garcia"
                          year="2019"
                          position="VP of Internal Affairs"
                        />
                        <BoardLeaders
                          photo={IMAGES.Vacant}
                          firstName="Vacant"
                          lastName=""
                          year="2019"
                          position="VP of External Affairs"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Brian2018}
                          firstName="Brian"
                          lastName="Hernandez"
                          year="2019"
                          position="Project Manager"
                        />
                        <BoardLeaders
                          photo={IMAGES.Vacant}
                          firstName="Vacant"
                          lastName=""
                          year="2019"
                          position="Webmaster"
                        />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">OFFICERS</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Kalvin2018}
                          firstName="Kalvin"
                          lastName="Mateo"
                          year="2019"
                          position="Administrative Officer"
                        />
                        <BoardLeaders
                          photo={IMAGES.Diego2018}
                          firstName="Diego"
                          lastName="Flores"
                          year="2019"
                          position="Finance Officer"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.GioC2018}
                          firstName="Giovanni"
                          lastName="Castellanos"
                          year="2019"
                          position="Digital Media Officer"
                        />
                        <BoardLeaders
                          photo={IMAGES.Deric2018}
                          firstName="Deric"
                          lastName="Kwok"
                          year="2019"
                          position="Project Officer"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Ryan2018}
                          firstName="Ryan"
                          lastName="Dunning"
                          year="2019"
                          position="Web/Networking Officer"
                        />
                      </div>
                      <br></br>
                      <br></br>
                      <div className="row">
                        <h2 className="h2-leaders">COMMITTEE</h2>
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Emily2018}
                          firstName="Emily"
                          lastName="Pascua"
                          year="2019"
                          position="Web/Project Committee"
                        />
                        <BoardLeaders
                          photo={IMAGES.Srivats2018}
                          firstName="Srivats"
                          lastName="Venkataraman"
                          year="2019"
                          position="Web/Project Committee"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Ingelbert2018}
                          firstName="Ingelbert"
                          lastName="Figueroa"
                          year="2019"
                          position="Project Committee"
                        />
                        <BoardLeaders
                          photo={IMAGES.Andrew2018}
                          firstName="Andrew"
                          lastName="Gonzalez"
                          year="2019"
                          position="Project Committee"
                        />
                      </div>
                      <div className="row-leaders centered-leader">
                        <BoardLeaders
                          photo={IMAGES.Erving2018}
                          firstName="Erving"
                          lastName="Lopez"
                          year="2019"
                          position="Project Committee"
                        />
                      </div>
                      <div className="space"></div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Board;
