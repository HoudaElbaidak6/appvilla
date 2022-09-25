import { Component } from "react";
import "./AppvillaFooter.css";
import logowhite from "../../images/white-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

class AppvillaFooter extends Component {
  render() {
    return (
      <div className="footerFtext">
        <img src={logowhite} className="img-fluid imgFooter" />
        <p className="fpfooter">
          Making the world a better place through constructing elegant
          hierarchies.
        </p>
        <div className="iconFlex">
          <FontAwesomeIcon className="iconcolor" icon={faFacebook} />
          <FontAwesomeIcon className="iconcolor" icon={faTwitter} />
          <FontAwesomeIcon className="iconcolor" icon={faInstagram} />
          <FontAwesomeIcon className="iconcolor" icon={faLinkedin} />
          <FontAwesomeIcon className="iconcolor" icon={faYoutube} />
          <FontAwesomeIcon className="iconcolor" icon={faPinterest} />
        </div>
        <p className="spfooter">Designed and Developed by UIdeck</p>
      </div>
    );
  }
}
export default AppvillaFooter;
