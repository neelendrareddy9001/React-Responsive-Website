import React from "react";
import Home from "../home/homes/Home";
import Branding from "../home/Branding";
import About from "../home/about/About";
import Service from "../home/services/Service";

const HomePages = () => {
  return (
    <div>
      <Home />
      <Branding />
      <About />
      <Service />
    </div>
  );
};

export default HomePages;
