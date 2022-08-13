import React, { useState, useEffect } from "react";
import "./GoogleMapsComponent.css";
import gMapStyles from "./mapStyles";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
// import MarkerInfo from "./MarkerInfo/MarkerInfo";
const markers = [
  {
    lat: 14.699684,
    lng: 121.104331,
  },
  {
    lat: 14.699805,
    lng: 121.103929,
  },
  {
    lat: 14.700111,
    lng: 121.104133,
  },
];
const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

function GoogleMapsComponent(props) {
  // GETS USER LOCATION
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

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

  // CALCULATE ROUTE

  async function calculateRoute() {
    let start = center;
    let end = markers[1];
    // eslint-disable-next-line no-undef
    let transportType = google.maps.TravelMode.WALKING;

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: start,
      destination: end,
      // eslint-disable-next-line no-undef
      travelMode: transportType,
    });
    setDirectionsResponse(results);
    console.log(results);

    // setDistance(results.routes[0].legs[0].distance.text);
    // setDuration(results.routes[0].legs[0].duration.text);
    alert(results.routes[0].legs[0].distance.text);
    alert(results.routes[0].legs[0].duration.text);
  }

  function getNearestMarker() {
    const lat1 = latitude;
    const lon1 = longitude;
    var pi = Math.PI;
    var R = 6371; //equatorial radius
    var distances = [];
    var closest = -1;

    for (let i = 0; i < markers.length; i++) {
      var lat2 = markers[i].lat;
      var lon2 = markers[i].lng;

      var chLat = lat2 - lat1;
      var chLon = lon2 - lon1;

      var dLat = chLat * (pi / 180);
      var dLon = chLon * (pi / 180);

      var rLat1 = lat1 * (pi / 180);
      var rLat2 = lat2 * (pi / 180);

      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(rLat1) *
          Math.cos(rLat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;

      distances[i] = d;
      if (closest === -1 || d < distances[closest]) {
        closest = i;
      }
    }

    // (debug) The closest marker is:
    console.log(markers[closest]);
  }

  useEffect(() => {
    getLocation();
    // getNearestMarker();
    // calculateRoute();
  }, []);

  // GOOGLE MAP SETUP

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBJl-1Frpgrjv8FlvBj-Fr5kkbFA3mDNAc",
  });
  // MARKER CENTER // USER

  const center = {
    lat: latitude,
    lng: longitude,
  };
  if (!isLoaded) {
    return <div>Maps loading...</div>;
  }
  //RENDERER
  return (
    <>
      <button onClick={calculateRoute}>test</button>
      <GoogleMap
        mapContainerClassName="mapStyle"
        center={center}
        zoom={19}
        options={options}
        onLoad={(map) => setMap(map)}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />;
        <Marker position={markers[0]} />
        <Marker position={markers[1]} />
        <Marker position={markers[2]} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </>
  );
}

export default GoogleMapsComponent;
