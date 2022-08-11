import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import toiletfloating from "/public/images/toiletfloating.png";

const Hero = () => (
  <section id="hero" className="d-flex align-items-center" data-testid="Hero">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-7 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1>Find your comfort in just a click</h1>
          <h2>
            Community generated public restrooms. <br />
            By the people for the people.
          </h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="locator" className="nav-link btn-get-started scrollto">
              Find A Toilet
            </a>
          </div>
        </div>
        <div
          className="col-lg-5 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src={toiletfloating}
            className="img-fluid animated"
            alt="toilet"
          />
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
