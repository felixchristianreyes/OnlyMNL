import HomeNavbar from "../Home/Navbar/HomeNavbar";
import bar from "../../images/icons/bar.png";
import store from "../../images/icons/store.png";
import toilet from "../../images/icons/toilet.png";
import React, { useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";

const options = {
  disableDefaultUI: true,
  zoomControl: false,
};

const Form = () => {
  const [googleIcon, setGoogleIcon] = useState();
  const [markerData, setMarkerData] = useState([]);
  const [marker, setMarker] = useState("");
  const [center, setCenter] = useState();
  console.log(googleIcon);

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

  // FUNCTION TO POST
  function handleInput(e) {
    if (e.target.value === "1") {
      setGoogleIcon(bar);
    } else if (e.target.value === "2") {
      setGoogleIcon(toilet);
    } else if (e.target.value === "3") {
      setGoogleIcon(store);
    }
  }

  async function postData(e) {
    e.preventDefault();
    const markerInfo = {
      address: e.target.address.value,
      lat: e.target.lat.value,
      lng: e.target.lng.value,
      type: e.target.type.value,
    };
    setMarkerData(markerInfo);
    // console.log("postData", e.target.address.value);
    // console.log("postData", e.target.lat.value);
    // console.log("postData", e.target.lng.value);
    // console.log("postData", e.target.type.value);
    // console.log(markerInfo);

    const res = await axios.post(
      "http://phplaravel-821625-2823297.cloudwaysapps.com/api/add-markers",
      markerData
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      alert("Submitted Successfully");
    }
  }
  return (
    <>
      <HomeNavbar />
      <div className="p-0 mt-5 container">
        <div className="card p-5">
          <h1>Marker Data Form</h1>
          <form name="addressForm" onSubmit={postData}>
            <div className="form-group">
              <div className="mb-4">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Ex. 121 Don Zulwetta St, QC"
                />
                <label>Latitude</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  name="lat"
                  placeholder="Select a marker"
                  defaultValue={marker.lat}
                />
              </div>
              <div className="mb-4">
                <label>Longitude</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  name="lng"
                  placeholder="Select a marker"
                  defaultValue={marker.lng}
                />
              </div>
              <div className="mb-4">
                <label>Marker Type</label>
                <select
                  name="type"
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleInput}
                >
                  <option defaultValue>Choose a place type</option>
                  <option value="1">Bars</option>
                  <option value="2">Comfort Room</option>
                  <option value="3">Karinderya</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mb-5">
              Submit
            </button>
          </form>
          <div className="card p-5 h-50">
            <GoogleMap
              mapContainerClassName="mapStyle"
              center={center}
              zoom={19}
              options={options}
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
                icon={{
                  url: googleIcon,
                  scaledSize: new window.google.maps.Size(60, 60),
                  origin: new window.google.maps.Point(0, 0),
                }}
              />
            </GoogleMap>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
