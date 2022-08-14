import HomeNavbar from "../Home/Navbar/HomeNavbar";
import React, { useState, useEffect } from "react";
import gMapStyles from "./mapStyles";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";

const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

const Form = (props) => {
  // SET MARKER
  const [markerData, setMarkerData] = useState("");
  const [marker, setMarker] = useState({});
  // GETS USER LOCATION
  const [center, setCenter] = useState("");

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
    setCenter({
      lat: parseFloat(position.coords.latitude),
      lng: parseFloat(position.coords.longitude),
    });
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

  // FUNCTION TO POST
  function handleInput(e) {
    const markerInfo = {
      [e.target.id]: e.target.value,
      lat: marker.lat,
      lng: marker.lng,
    };
    setMarkerData(markerInfo);
    console.log(markerData);
  }
  async function postData(e) {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8000/api/add-markers",
      markerData
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
    }
  }
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
          }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />;
          <Marker
            position={{
              lat: parseFloat(marker.lat),
              lng: parseFloat(marker.lng),
            }}
          />
        </GoogleMap>
      </div>
      <div className="container">
        <h1>Marker Data Form</h1>
        <form onSubmit={postData}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              onChange={handleInput}
            />

            <label>Latitude</label>
            <input
              disabled
              type="text"
              className="form-control"
              id="text"
              placeholder="Select a marker"
              value={marker.lat}

            />
            <label>Longitude</label>
            <input
              disabled
              type="text"
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
