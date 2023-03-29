import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./headercarousel.scss";
import Typed from "react-typed";
import logo from "./acmlogo1.png";

class HeaderCarousel extends React.Component {
  render() {
    return (
      <div id="introduction" class="d-flex align-items-center">
          <div id="content" class="position-relative">
            <img id="logoImage" src={logo} alt="logo" />
            <span id="codeText">
              .creates('
              <Typed
                className="typed"
                strings={[
                  "ASI's secret service",
                  "the dream web team...",
                  "Daniel's drone strikes",
                  "Diane's Advanced team",
                  "Ashley as ASI pres",
                  "Keyvan as Google CEO",
                ]}
                typeSpeed={90}
                backDelay={60}
                loop />
              ');
            </span>
          </div>
        </div>
    );
  }
}

export default HeaderCarousel;
