import React, { useState, useEffect } from "react";
import gMapStyles from "./mapStyles";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

function GoogleMapsSelect(props) {
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
    console.log('getCoordinates',position);
    setLatitude(parseFloat(position.coords.latitude));
    setLongitude(parseFloat(position.coords.longitude));
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
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  //RENDERER
  return (
    <>
      <div>
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
          <Marker position={center} />;{/* SELECT GEOLOCATION MARKER */}
          {/* <Marker
            position={{
              lat: parseFloat(marker.lat),
              lng: parseFloat(marker.lng),
            }}
          /> */}
        </GoogleMap>
      </div>
    </>
  );
}

export default GoogleMapsSelect;
