import React, { useState, useEffect } from "react";
import "./GoogleMapsComponent.css";
import gMapStyles from "./mapStyles";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
// import MarkerInfo from "./MarkerInfo/MarkerInfo";
// const markers = {
//   marker1: {
//     lat: 14.55234,
//     lng: 121.073583,
//   },
//   marker2: {
//     lat: 14.551865,
//     lng: 121.074046,
//   },
//   marker3: {
//     lat: 14.55273,
//     lng: 121.073507,
//   },
// };

const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

function GoogleMapsComponent() {
  // GETS USER LOCATION
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

  //On Page Mount
  useEffect(() => {
    getLocation();
  });

  // USER LOCATION
  const center = {
    lat: latitude,
    lng: longitude,
  };

  // GOOGLE MAP SETUP
  // const [selected, setSelected] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBJl-1Frpgrjv8FlvBj-Fr5kkbFA3mDNAc",
  });

  if (!isLoaded) {
    return <div>no work</div>;
  }
  return (
    <>
      <GoogleMap
        mapContainerClassName="mapStyle"
        center={center}
        zoom={20}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />;

        {/* <Marker
          position={markers.marker1}
          icon={{
            url: "/toiletIcon.svg",
            scaledSize: new window.google.maps.Size(25, 25),
          }}
          onClick={() => {
            setSelected(markers.marker1);
          }}
        />
        <Marker
          position={markers.marker2}
          icon={{
            url: "/toiletIcon.svg",
            scaledSize: new window.google.maps.Size(25, 25),
          }}
          onClick={() => {
            setSelected(markers.marker2);
          }}
        />
        <Marker
          position={markers.marker3}
          icon={{
            url: "/toiletIcon.svg",
            scaledSize: new window.google.maps.Size(25, 25),
          }}
          onClick={() => {
            setSelected(markers.marker3);
          }}
        /> */}
        {/* {selected ? (
          <InfoWindow
            position={{ lat: selected.lat + 0.00001, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <MarkerInfo />
          </InfoWindow>
        ) : null} */}
      </GoogleMap>
    </>
  );
}

export default GoogleMapsComponent;
