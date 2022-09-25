import { Component } from "react";
import "./LiFooter.css";

class LiFooter extends Component {
  render() {
    return (
      <div>
        <h3 className="footerh3"> {this.props.title}</h3>
        <ul className="ulfooter">
          <li className="lifooter">{this.props.liF}</li>
          <li className="lifooter">{this.props.liS}</li>
          <li className="lifooter">{this.props.liS}</li>
          <li className="lifooter">{this.props.liT}</li>
          <li className="lifooter">{this.props.liFo}</li>
          <li className="lifooter">{this.props.liFi}</li>
        </ul>
      </div>
    );
  }
}
export default LiFooter;
