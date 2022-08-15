import React, { useState, useEffect } from "react";
import "./GoogleMapsComponent.css";
import gMapStyles from "./mapStyles";
import PuffLoader from "react-spinners/PuffLoader";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";

const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

function GoogleMapsComponent(props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBJl-1Frpgrjv8FlvBj-Fr5kkbFA3mDNAc",
  });
  const [marker, setMarker] = useState();
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [directionsResponse, setDirectionsResponse] = useState(null);

  //USER CENTER

  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function getCoordinates(position) {
    setLatitude(parseFloat(position.coords.latitude));
    setLongitude(parseFloat(position.coords.longitude));
  }

  async function getData() {
    const res = await axios.get("http://localhost:8000/api/markers");
    if (res.data.status === 200) {
      setMarker(res.data.data);
      console.log(res.data.data);
    }
  }

  function getNearestMarker() {
    let lat1 = latitude;
    let lon1 = longitude;
    var pi = Math.PI;
    var R = 6371; //equatorial radius
    var distances = [];
    var closest = -1;

    for (let i = 0; i < marker.length; i++) {
      var lat2 = marker[i].lat;
      var lon2 = marker[i].lng;

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
    // return marker[closest];
    const floatValue = {
      lat: parseFloat(marker[closest].lat),
      lng: parseFloat(marker[closest].lng),
    };

    return floatValue;
    // console.log(marker[closest]);
    // console.log(stringifiedValue);
  }

  async function calculateRoute() {
    let start = center;
    let end = getNearestMarker();
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: start,
      destination: end,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);

    alert("Distance: " + results.routes[0].legs[0].distance.text);
    alert("Duration: " + results.routes[0].legs[0].duration.text);
  }

  useEffect(() => {
    setTimeout(() => {
      calculateRoute();
    }, 1000);
  }, [loading]);

  useEffect(() => {
    getLocation();
    getData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (!isLoaded) {
    return <div>Maps loading...</div>;
  }

  //RENDERER
  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="d-flex flex-column">
            <PuffLoader color="aqua" loading={loading} size={100} />
          </div>
        </div>
      ) : (
        <>
          <div>
            <GoogleMap
              mapContainerClassName="mapStyle"
              center={center}
              zoom={19}
              options={options}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <Marker position={center} />;
              {marker.map((markers) => (
                <Marker
                  key={markers.id}
                  position={{
                    lat: parseFloat(markers.lat),
                    lng: parseFloat(markers.lng),
                  }}
                />
              ))}
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
        </>
      )}
    </>
  );
}

export default GoogleMapsComponent;
