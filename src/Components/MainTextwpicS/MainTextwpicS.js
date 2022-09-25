import { Component } from "react";
import "./MainTextwpicS.css";
import Textwpic from "../Textwpic/Textwpic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import imgS from "../../images/app-ss2.png";

class MainTextwpicS extends Component {
  render() {
    return (
      <div className="div container px-4">
        <div className="row">
          <div className="col-6">
            <img className="img-fluid" src={imgS} alt="imgS" />
          </div>
          <div className="col-6 d-flex align-items-center">
            <Textwpic
              icone={faObjectGroup}
              titre="Seamless Loyalty"
              paragraph="Collaborate over projects with your team and clients optimised for
              mobile and tablet don't let slow page speeds drive our innovative
              platform empowers anyone to convert clicks ou'll publish your
              first landing page in minutes."
              button="Get Started"
            ></Textwpic>
          </div>
        </div>
      </div>
    );
  }
}
export default MainTextwpicS;
