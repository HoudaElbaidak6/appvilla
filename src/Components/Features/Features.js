import { Component } from "react";
import "./Features.css";
import Titles from "../Titles/Titles";
import Cards from "../Cards/Cards.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faLock,
  faRotate,
  faShield,
  faGear,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

class Features extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="container p-5 ">
          <div className="cards">
            <Titles
              titlef="FEATURES"
              titleb="Your Experience Gets Better And Better Over Time."
              paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            />
            <Cards icon={faCloudArrowDown} title="Push to Deploy">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              fugiat!
            </Cards>
            <Cards icon={faLock} title="SSL Certificates">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              accusamus.
            </Cards>
            <Cards icon={faRotate} title="Simple Queues">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, veritatis.
            </Cards>
            <Cards icon={faShield} title="Advanced Security">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              voluptates!
            </Cards>
            <Cards icon={faGear} title="Powerful API">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, similique?
            </Cards>
            <Cards icon={faDatabase} title="Database Backups">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              esse?
            </Cards>
          </div>
        </div>
      </div>
    );
  }
}
export default Features;
