import { Component } from "react";
import "./LongCard.css";

class LongCard extends Component {
  render() {
    return (
      <div className="longcard py-3">
        <div className="firstSection px-3 pb-3">
          <h5>{this.props.title}</h5>
          <p className="text-muted">{this.props.paragraph}</p>
          <div className="price">
            <h1>{this.props.price}</h1>
            <h6>{this.props.currency}</h6>
          </div>
          <button>{this.props.button}</button>
        </div>
        <div className="secondSection p-3 ">
          <div className="insideS ">
            <p>WHAT'S INCLUDED</p>
            <ul>
              <li className="text-muted">Cras justo odio.</li>
              <li className="text-muted">Dapibus ac facilisis in.</li>
              <li className="text-muted">Morbi leo risus.</li>
              <li className="text-muted">Potenti felis, in cras ligula.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LongCard;
