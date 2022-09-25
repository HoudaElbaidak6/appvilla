import { Component } from "react";
import "./Bgpink.css";
import FirstScontent from "../FirstScontent/FirstScontent";

class Bgpink extends Component {
  render() {
    return (
      <div className="bgPink py-5 px-2">
        <div className="container ">
          <FirstScontent />
        </div>
      </div>
    );
  }
}
export default Bgpink;
