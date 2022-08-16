import React from "react";
import "./Main.css";
import GoogleMapsComponent from "./GoogleMapsComponent/GoogleMapsComponent";
import HomeNavbar from "../Home/Navbar/HomeNavbar";

const Main = (props) => (
  <>
    <HomeNavbar />
    <GoogleMapsComponent type={props.type} />
  </>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
