import { Component } from "react";
import "./FirstScontent.css";
import Buttons from "../Buttons/Buttons";
import imgF from "../../images/phone.png";
class FirstScontent extends Component {
  render() {
    return (
      <div className="bgMax row justify-content-evenly  ">
        <div className="content col-lg-5">
          <h1>A Powerful App For Your Business.</h1>
          <p>
            From open source to pro services, Piqes helps you to build, deploy,
            test, and monitor apps.
          </p>
          <Buttons />
        </div>
        <div className="col-lg-7">
          <img className="img img-fluid" src={imgF} alt="phoneImage" />
        </div>
      </div>
    );
  }
}

export default FirstScontent;
