import { Component } from "react";
import "./Team.css";
import Titles from "../Titles/Titles";
import { TeamCards } from "../TeamCards/TeamCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.jpg";
import team3 from "../../images/team3.jpg";

export class Team extends Component {
  render() {
    return (
      <div className="bgTeam">
        <div className="container p-5">
          <Titles
            titlef="TEAM"
            titleb="Meat Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
          />
          <div className="teamCardsflex">
          <TeamCards
            pic={team1}
            name="Leonard Krasner"
            profession="Senior Designer"
            icon={faTwitter}
            icons={faLinkedin}
          />
          <TeamCards
            pic={team2}
            name="Leonard Krasner"
            profession="Senior Designer"
            icon={faTwitter}
            icons={faLinkedin}
          />
          <TeamCards
            pic={team3}
            name="Leonard Krasner"
            profession="Senior Designer"
            icon={faTwitter}
            icons={faLinkedin}
          />
          </div>
        </div>
      </div>
    );
  }
}
