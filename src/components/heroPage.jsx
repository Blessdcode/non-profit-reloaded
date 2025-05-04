import React from "react";
import { Link } from "react-router-dom";

const HeroPage = () => {
    return (
      <header>
        <div className="slider_area slider_bg_1">
          <div className="container">
            <div className="single_slider">
              <div className="slider_text">
                <h3>
                  Support a Causes <br />
                  You Care About
                </h3>
                <p>
                  At Charity United we believe that all children in the world
                  have the right to be <br />
                  cared for and the right to be protected{" "}
                </p>
                <Link to="sign-up" className="btn2">
                  Join Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};

export default HeroPage;
