import { Component } from "react";
import "./Titles.css";

class Titles extends Component {
  render() {
    return (
      <div className="titles mb-5">
        <h5>{this.props.titlef}</h5>
        <h1>{this.props.titleb}</h1>
        <p className="text-muted">{this.props.paragraph}</p>
      </div>
    );
  }
}
export default Titles;
