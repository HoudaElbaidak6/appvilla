import { Component } from "react";
import "./Buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="buttonF">
          <FontAwesomeIcon className="icon-size" icon={faApple} />
          App Store
        </button>
        <button className="buttonS">
          <FontAwesomeIcon className="icon-size" icon={faGooglePlay} />
          Google Play
        </button>
      </div>
    );
  }
}

export default Buttons;
