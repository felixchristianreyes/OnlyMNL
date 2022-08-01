/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./AboutUs.css";
import { BsCheck } from "react-icons/bs";

const AboutUs = () => (
  <section id="about" className="about" data-testid="AboutUs">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>About Us</h2>
      </div>

      <div className="row content">
        <div className="col-lg-6">
          <p>A company that provides convenience in the face of crisis</p>
          <ul>
            <li>
              <BsCheck /> We have people scouting for public restrooms all over
              the Phillippines
            </li>
            <li>
              <BsCheck /> Local government offices provides us data to input on our database
            </li>
            <li>
              <BsCheck /> Our website doesn't take convenience for the sake of monitary gains
            </li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <p>
            Please let us know we can be of service more, by contacting us.
          </p>
          <a href="#" className="btn-learn-more">
            Contact-us
          </a>
        </div>
      </div>
    </div>
  </section>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
