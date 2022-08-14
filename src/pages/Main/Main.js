import React from "react";
import "./Main.css";
import GoogleMapsComponent from "./GoogleMapsComponent/GoogleMapsComponent";
import HomeNavbar from "../Home/Navbar/HomeNavbar";

const Main = () => (
  <>
    <HomeNavbar />
    <GoogleMapsComponent />
  </>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
