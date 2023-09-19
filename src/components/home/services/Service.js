import React from "react";
import ServiceData from "./ServiceData";

const Service = () => {
  return (
    <>
      <section className="Services topMargin">
        <div className="container">
          <div className="heading">
            <h3>SERVICES</h3>
            <h1>Interactive Serices Offered Me</h1>
          </div>

          <div className="contain grid topMargin">
            {ServiceData.map((vale, i) => {
              return (
                <>
                  <div key={i} className="box">
                    <div className="img">
                      <img src={vale.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{vale.title}</h2>
                      <p>{vale.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
