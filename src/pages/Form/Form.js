import HomeNavbar from "../Home/Navbar/HomeNavbar";
import React, { useState, useEffect } from "react";
import gMapStyles from "./mapStyles";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

const Form = (props) => {
  // SET MARKER
  const [marker, setMarker] = useState({});
  // GETS USER LOCATION
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  // PAN TO USER CENTER
  const [map, setMap] = useState(/** @type google.maps.Map */ null);

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

  // MARKER CENTER // USER

  useEffect(() => {
    getLocation();
  }, []);

  // GOOGLE MAP SETUP

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBJl-1Frpgrjv8FlvBj-Fr5kkbFA3mDNAc",
  });

  if (!isLoaded) {
    return <div>Maps loading...</div>;
  }
  //USER CENTER
  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <>
      <HomeNavbar />
      <div className="">
        <GoogleMap
          mapContainerClassName="mapStyle"
          center={center}
          zoom={19}
          options={options}
          onLoad={(map) => setMap(map)}
          //   SELECT GEOLOCATION ONCLICK
          onClick={(event) => {
            setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
            console.log(marker);
          }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />;{/* SELECT GEOLOCATION MARKER */}
          <Marker
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
          />
        </GoogleMap>
      </div>
      <div className="container">
        <h1>Marker Data Form</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            />

            <label>Latitude</label>
            <input
              disabled
              type="number"
              className="form-control"
              id="lat"
              placeholder="Select a marker"
              value={marker.lat}
            />
            <label>Longitude</label>
            <input
              disabled
              type="number"
              className="form-control"
              id="lng"
              placeholder="Select a marker"
              value={marker.lng}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
