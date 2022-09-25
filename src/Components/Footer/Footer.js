import { Component } from "react";
import "./Footer.css";
import AppvillaFooter from "../AppvillaFooter/AppvillaFooter";
import LiFooter from "../LiFooter/LiFooter";
import FormFooter from "../FormFooter/FormFooter";

class Footer extends Component {
  render() {
    return (
      <div className="footerBg">
        <div className="footerBigflex container p-5">
          <div className="footerFlex">
            <AppvillaFooter />
            <LiFooter
              title="Solutions"
              liF="Marketing"
              liS="Analytics"
              liT="Commerce"
              liFo="Insights"
              liFi="Promotion"
            />
            <LiFooter
              title="Support"
              liF="Pricing"
              liS="Documentation"
              liT="Guides"
              liFo="API Status"
              liFi="Live Support"
            />
            <LiFooter
              title="Company"
              liF="About Us"
              liS="Our Blog"
              liT="Jobs"
              liFo="Press"
              liFi="Contact Us"
            />
            <LiFooter
              title="Legal"
              liF="Terms And Conditions"
              liS="Privacy Policy"
              liT="Catering Services"
              liFo="Customer Relations"
              liFi="Innovation"
            />
          </div>

          <FormFooter />
        </div>
      </div>
    );
  }
}

export default Footer;
