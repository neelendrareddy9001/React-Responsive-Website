import React from "react";
import Blogdata from "./BlogData";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Blog = () => {
  return (
    <>
      <section className="blog Services">
        <div className="container topMargin">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className="contain grid topMargin">
            {Blogdata.map((val, index) => {
              return (
                <>
                  <div key={index} className="box">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <span>{val.date}</span>
                      <h2>{val.title}</h2>
                      {/* <p>{ val.desc}</p> */}
                      <a href="/">
                        Read More
                        <KeyboardDoubleArrowRightIcon className="icon" />
                      </a>
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

export default Blog;
