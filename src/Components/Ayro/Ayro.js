import { Component } from "react";
import "./Ayro.css";
import ayro from "../../images/brand2.svg";
import testi1 from "../../images/testi1.jpg";

export class Ayro extends Component {
  render() {
    return (
      <div className="bgAyro">
        <div className="flex container p-5">
          <img src={ayro} className="ayrosize" />
          <p>
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has"
          </p>
          <div className="person">
            <img className="ayroperson" src={testi1} />
            <h6>Musharof Chowdhury</h6>
            <p className="secondP text-muted">CEO - GrayGrids</p>
          </div>
        </div>
      </div>
    );
  }
}
