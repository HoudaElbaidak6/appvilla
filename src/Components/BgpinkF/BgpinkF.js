import { Component } from "react";
import "./BgpinkF.css";
import BgpinkthinContent from "../BgpinkthinContent/BgpinkthinContent";

export class BgpinkF extends Component {
  render() {
    return (
      <div className="background">
        <div className="divflex container p-5">
          <BgpinkthinContent
            title="Trusted by developers from over 80 planets"
            paragraph="There are many variations of passages of Lorem Ipsum available, but the majority."
          />
          <div className="numbers">
            <div className="number">
              <h1>100%</h1>
              <p>Satisfaction</p>
            </div>
            <div className="number">
              <h1>120K</h1>
              <p>Happy Users</p>
            </div>
            <div className="number">
              <h1>125k+</h1>
              <p>Downloads</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
