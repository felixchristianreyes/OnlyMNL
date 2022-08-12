import React, { useState } from "react";
import "./UserLocation.css";

const UserLocation = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function getCoordinates(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

};

export default UserLocation;
