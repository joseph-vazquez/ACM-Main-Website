import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./img/acmgrad1.png";
import "./currentevents.css";

const CurrentEvents = () => {
  return (
    <div class="currentevents">
      <div class="container row mx-auto">
        <div class="col-12 news-title" align="center">
          What's New?
        </div>
        <div
          class="news-desc col-md-4 justify-content-center my-auto"
          align="center"
        >
          <h3>Congratulations Class of 2023!</h3>
          <div>Presenting the graduates of ACM</div>
        </div>
        <div class="col-md-8 pb-3" align="center">
          <img src={img1} class="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default CurrentEvents;
