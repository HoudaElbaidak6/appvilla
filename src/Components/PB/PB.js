import { Component } from "react";
import "./PB.css";
import singleBrand from "../singleBrand/singleBrand";
import brandF from "../../images/lineicons-logo.svg";
import brandS from "../../images/pagebulb-logo.svg";
import brandT from "../../images/graygrids-logo.svg";

class PB extends Component {
  render() {
    return (
      <div className="brandBg">
        <div className=" container p-5">
          <div className="imgFlex">
            <img src={brandF} />
            <img src={brandS} />
            <img src={brandT} />
            <img src={brandS} />
          </div>
        </div>
      </div>
    );
  }
}
export default PB;
