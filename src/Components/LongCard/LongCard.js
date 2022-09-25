import { Component } from "react";
import "./LongCard.css";

class LongCard extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="longcard py-3">
          <div className="firstSection px-3 pb-3">
            <h5 >Hobby</h5>
            <p>All the basics for starting a new business</p>
            <div className="price">
              <h1>$12</h1>
              <h6>/mo</h6>
            </div>
            <button>Buy Hobby</button>
          </div>
          <div className="secondSection pb-3 ">
            <p>WHAT'S INCLUDED</p>
            <ul>
              <li>Cras justo odio.</li>
              <li>Dapibus ac facilisis in.</li>
              <li>Morbi leo risus.</li>
              <li>Potenti felis, in cras ligula.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LongCard;
