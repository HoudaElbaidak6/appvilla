import { Component } from "react";
import "./Textwpic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Textwpic extends Component {
  render() {
    return (
      <div className="flexDiv">
        <div className="icon-style">
          <FontAwesomeIcon className="icons " icon={this.props.icone} />
        </div>
        <h2 className="titre">{this.props.titre}</h2>
        <p className="pColor text-muted">{this.props.paragraph}</p>
        <button className="buttong">{this.props.button}</button>
      </div>
    );
  }
}

export default Textwpic;
