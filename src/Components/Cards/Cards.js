import React, { Component } from "react";
import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class Cards extends Component {
  render() {
    return (
      <div className="card d-flex gap-4 ">
        <div className="icon-div">
          <FontAwesomeIcon className="card-icones " icon={this.props.icon} />
        </div>
        <h5 className="cardTitle">{this.props.title}</h5>
        <p className="cardP text-muted">{this.props.children}</p>
      </div>
    );
  }
}

export default Cards;
