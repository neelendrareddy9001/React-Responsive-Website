import React from "react";
import Home from "../home/homes/Home";
import Branding from "../home/Branding";
import About from "../home/about/About";
import Service from "../home/services/Service";
import Wrapper from "../home/Wrapper";
import Skill from "../home/Skill";

const HomePages = () => {
  return (
    <div>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skill />
    </div>
  );
};

export default HomePages;
