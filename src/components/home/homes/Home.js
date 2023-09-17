import React from "react";
import home from "../../../assets/home.png";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="containeer flex">
          <div className="left">
            <div className="img">
              <img src={home} alt="" />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              I Am A <br />
              WEB DESIGNER
            </h1>
            <div className="socialIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-youtube youtube"></i>
              <i className="fab fa-pintrest pintrest"></i>
              <i className="fab fa-dribbble dribbble"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. adipiscing elit.
              Dignissimos beatae quae iure quidem rational Nam vel sed
              consequnter voluptatum inventore et minima mariores eios. Desenut
              odio ea?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
