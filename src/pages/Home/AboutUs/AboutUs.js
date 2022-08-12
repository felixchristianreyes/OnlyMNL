/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./AboutUs.css";
import { BsCheck } from "react-icons/bs";
import Section from "../Section";

const AboutUs = () => (
  <section id="about" className="about" data-testid="AboutUs">
    <div className="container" data-aos="fade-up">
      <Section text="About Us" />
      

      <div className="row content">
        <div className="col-lg-12">
          <p className="text-center">We are a lone company that provides modern solution for commuters, tourist or civilians</p>
          <ul className="text-center">
            <li>
              <BsCheck /> We think of unusual problems and provide modern solutions.
            </li>
            <li>
              <BsCheck /> Helping the community #1 is our goal.
            </li>
            <li>
              <BsCheck /> Keeps the principles of to give is to recieve.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
