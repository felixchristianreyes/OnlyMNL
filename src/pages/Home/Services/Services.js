/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Services.css";
import Card from "./Card";
import { AiOutlineUser, AiOutlineDatabase } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";

const Services = () => (
  <section id="services" className="services section-bg" data-testid="Services">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Features</h2>
      </div>

      <div className="row">
        {/* User */}
        <Card
          title="User"
          icon={<AiOutlineUser />}
          description="You want to share your experience? You have some suggestions to enhance our application? You want to share your happiness or your disappointment? You have any question or want some extra information?"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        {/* City Representative */}
        <Card
          title="City representative"
          icon={<BiBuildingHouse />}
          description="You have public toilets on your premises and you’d like them to be included in our database? You have paper or digital documents you’d like to share with us and appear as an official city contributor in our application?"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        {/* Brand representative */}
        <Card
          title="Brand representative"
          icon={<BsShopWindow />}
          description="You want to promote your brand through our application? You want some visibility and, for instance, want to display your retail shops in our app?"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        {/* You want to use our database */}
        <Card
          title="Database"
          icon={<AiOutlineDatabase />}
          description="You need our database for some specific purpose on your company or api?"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
      </div>
    </div>
  </section>
);

Services.propTypes = {};

Services.defaultProps = {};

export default Services;
