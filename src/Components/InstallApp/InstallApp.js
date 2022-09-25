import { Component } from "react";
import "./InstallApp.css";
import BgpinkthinContent from "../BgpinkthinContent/BgpinkthinContent";
import Buttons from "../Buttons/Buttons.js";

class InstallApp extends Component {
  render() {
    return (
      <div className="installFlex">
        <div className="container p-5">
          <BgpinkthinContent
            title="Install Appvilla and Start Using"
            paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          />
          <div className="buttonsInstall py-3">
            <Buttons />
            <div />
          </div>
        </div>
      </div>
    );
  }
}
export default InstallApp;
