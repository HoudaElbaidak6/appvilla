import { Component } from "react";
import "./MainTextwpic.css";
import Textwpic from "../Textwpic/Textwpic.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import imgF from "../../images/app-ss1.png";

class MainTextwpic extends Component {
  render() {
    return (
      <div className="div container px-4">
        <div className="row ">
          <div className="col-6 d-flex align-items-center">
            <Textwpic
              icone={faArrowDown}
              titre="1,25,000 Customers Using The Application!"
              paragraph="Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks ou'll publish your first landing page in minutes."
              button="Get Started"
            ></Textwpic>
          </div>
          <div className="col-6 ">
            <img className="img-fluid" src={imgF} alt="img" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainTextwpic;
