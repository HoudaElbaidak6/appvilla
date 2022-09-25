import { Component } from "react";
import "./TeamCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class TeamCards extends Component {
  render() {
    return (
      <div className="teamcard">
        <div>
          <img className="imgteam" src={this.props.pic} alt="pic" />
        </div>
        <div className="teaminfo p-4">
          <div className="teamName">
            <h6>{this.props.name}</h6>
            <p>{this.props.profession}</p>
          </div>
          <div className="iconFlex">
            <FontAwesomeIcon className="teamicon" icon={this.props.icon} />
            <FontAwesomeIcon className="teamicon" icon={this.props.icons} />
          </div>
        </div>
      </div>
    );
  }
}
