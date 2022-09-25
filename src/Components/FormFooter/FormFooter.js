import { Component } from "react";
import "./FormFooter";

class FormFooter extends Component {
  render() {
    return (
      <div className="formGeneral">
        <div className="textnewFooter">
          <h5>Subscribe To Our Newsletter</h5>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <div className="form">
          <input id="mail" placeholder="Your Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    );
  }
}

export default FormFooter;
