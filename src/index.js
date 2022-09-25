import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Bgpink from "./Components/Bgpink/Bgpink.js";
import { Titles } from "./Components/Titles/Titles";
import Features from "./Components/Features/Features.js";
import Cards from "./Components/Cards/Cards";
import Textwpic from "./Components/Textwpic/Textwpic";
import MainTextwpic from "./Components/MainTextwpic/MainTextwpic";
import MainTextwpicS from "./Components/MainTextwpicS/MainTextwpicS";
import BgpinkthinContent from "./Components/BgpinkthinContent/BgpinkthinContent";
import { BgpinkF } from "./Components/BgpinkF/BgpinkF";
import { PricingTitles } from "./Components/PricingTitles/PricingTitles";
import LongCard from "./Components/LongCard/LongCard";
import { TeamCards } from "./Components/TeamCards/TeamCards";
import { Team } from "./Components/Team/Team";
import { Ayro } from "./Components/Ayro/Ayro";
import InstallApp from "./Components/InstallApp/InstallApp";
import Faq from "./Components/Faq/Faq";
import Blog from "./Components/Blog/Blog";
import singleBrand from "./Components/singleBrand/singleBrand";
import PB from "./Components/PB/PB";
import AppvillaFooter from "./Components/AppvillaFooter/AppvillaFooter";
import LiFooter from "./Components/LiFooter/LiFooter";
import Footer from "./Components/Footer/Footer";
import FormFooter from "./Components/FormFooter/FormFooter";

/* import logo from "./images/comment1.jpg";
class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} />
      </div>
    );
  }
} */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Bgpink />
    <Features />
    <MainTextwpic />
    <MainTextwpicS />
    <BgpinkF />
    <PricingTitles />
    <Team />
    <Ayro />
    <InstallApp />
    <Faq />
    <PB />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
