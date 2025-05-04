import React from "react";

const Causes = () => {
  return (
    <article>
      <div className="container">
        <div className="causes_area">
          <div className="container">
            <div className="causes">
              <div className="causes_info">
                <div className="section_title">
                  <span>Upcoming Cause</span>
                  <h3>
                    Support Nahid for <br />
                    His pneumonia <br />
                    treatment
                  </h3>
                </div>
                <p>
                  Inspires employees and organizations to support causes they
                  care <br />
                  about. We do this to bring more resources to the nonprofits
                  that are <br />
                  changing our world.
                </p>
                <div className="target_rais_area">
                  <div className="single_raise">
                    <span>target :</span>
                    <h4>$2783</h4>
                  </div>
                  <div className="single_raise">
                    <span>raised :</span>
                    <h4>$1530</h4>
                  </div>
                  <div className="doante_btn">
                    <a href="#" className="btn3">
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="causes_thumb">
                <img src="img/causes/1.png" alt="" />
                <div className="progress anime">
                  <div className="value_progress value">
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Causes;
