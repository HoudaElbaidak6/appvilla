import { Component } from "react";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="blogMain ">
        <div>
          <img className="imgteam" src={this.props.img} alt="pic" />
        </div>
        <div className="infoBlog">
          <h6 className="fTitleblog">{this.props.pinkTitle}</h6>
          <h5 className="margin text-dark">{this.props.bigTitle}</h5>
          <p className="firstP  text-muted">{this.props.paragraph}</p>
          <div className="commentSection pt-4">
            <img src={this.props.img2} className="imgcomment" />
            <div className="nameComment">
              <h6 className="name">{this.props.name}</h6>
              <h6 className="date">{this.props.date}</h6>
            </div>
            <p className="lastP text-muted">{this.props.read}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
