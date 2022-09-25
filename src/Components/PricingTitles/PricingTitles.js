import { Component } from "react";
import "./PricingTitles.css";
import Titles from "../Titles/Titles";
import LongCard from "../LongCard/LongCard";

export class PricingTitles extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="container p-5 ">
          <Titles
            titlef="PRICING"
            titleb="Pricing Plan"
            paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          />
          <div className="divcardflex">
            <LongCard
              title="Hobby"
              paragraph="All the basics for starting a new business"
              price="$12"
              currency="/mo"
              button="Buy Hobby "
            />

            <LongCard
              title="Freelancer"
              paragraph="All the basics for starting a new business"
              price="$24"
              currency="/mo"
              button="Buy Freelancer"
            />

            <LongCard
              title="Startup"
              paragraph="All the basics for starting a new business"
              price="$32"
              currency="/mo"
              button="Buy Startup"
            />

            <LongCard
              title="Enterprise"
              paragraph="All the basics for starting a new business"
              price="$48"
              currency="/mo"
              button="Buy Enterprise"
            />
          </div>
        </div>
      </div>
    );
  }
}
