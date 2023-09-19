import React from "react";
import Home from "../home/homes/Home";
import Branding from "../home/Branding";
import About from "../home/about/About";
import Service from "../home/services/Service";
import Wrapper from "../home/Wrapper";
import Skill from "../home/Skill";
import WrapperOne from "../home/WrapperOne";
import Work from "../home/work/Work";
import Blog from "../home/blog/Blog";
import Footer from "../home/Footer";

const HomePages = () => {
  return (
    <div>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePages;
