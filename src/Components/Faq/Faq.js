import { Component } from "react";
import "./Faq.css";
import Titles from "../Titles/Titles";
import Blog from "../Blog/Blog";
import comment1 from "../../images/comment1.jpg";
import comment2 from "../../images/comment2.jpg";
import comment3 from "../../images/comment3.jpg";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";

class Faq extends Component {
  render() {
    return (
      <div className="faqbg">
        <div className="container p-5">
          <Titles
            titlef="FAQ"
            titleb="Frequently Asked Questions"
            paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          />
          <div className="blogFlex">
            <Blog img={blog1} pinkTitle="Blog" bigTitle="Boost your conversion rate" paragraph="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna." img2={comment1} name="Roel Aufderhar" date="Mar 15,2023" read="5 min read" />
            <Blog img={blog2} pinkTitle="Video" bigTitle="How to use search engine" paragraph="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna." img2={comment2} name="Jenifer Zuliya" date="Feb 10,2023" read=" 7 min read" />
            <Blog img={blog3} pinkTitle="Marketing" bigTitle="Awesome ways to boost sales" paragraph="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna." img2={comment3} name="Roel Aufderhar" date="Jan 20,2023" read=" 6 min read" />
            
          </div>
        </div>
      </div>
    );
  }
}
{}
export default Faq;
