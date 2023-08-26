import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

function about() {
  return (
    <div>
      <div className="about__inner">
        <div className="about__top">
          <div className="my-name">About Us</div>
          <div className="desc">
            <p>
              At FarmSpace, we harness the cutting-edge potential of satellite
              imagery and advanced data analytics to revolutionize the way we
              understand agriculture. Our platform offers farmers and
              governments an invaluable tool to enhance crop production
              efficiency and make informed decisions.
            </p>
            <br />
            <p>
              We are a team of passionate individuals with a shared vision of
              creating a sustainable future for agriculture. We are driven by a
              desire to make a positive impact on the lives of farmers and the
              environment.
            </p>
          </div>
          <div className="social-boxes">
            <div className="box knowmore">
              <div className="content">
                <i className="fab fa-linkedin-in"></i>
                <div className="items">
                  <Link to="./Form" className="name">
                    Get Started →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default about;
