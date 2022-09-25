import { Component } from "react";
import "./BgpinkthinContent.css";

class BgpinkthinContent extends Component {
  render() {
    return (
      <div className="bgpinkContent">
        <h1>{this.props.title}</h1>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}

export default BgpinkthinContent;
