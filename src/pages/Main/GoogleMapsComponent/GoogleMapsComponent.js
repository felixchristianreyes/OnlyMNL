import React, { useState } from "react";
import "./GoogleMapsComponent.css";
import gMapStyles from "./mapStyles";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MarkerInfo from "./MarkerInfo/MarkerInfo";
const markers = {
  marker1: {
    lat: 14.55234,
    lng: 121.073583,
  },
  marker2: {
    lat: 14.551865,
    lng: 121.074046,
  },
  marker3: {
    lat: 14.55273,
    lng: 121.073507,
  },
};

const options = {
  styles: gMapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 14.552973,
  lng: 121.073485,
};

function GoogleMapsComponent() {
  const [selected, setSelected] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBJl-1Frpgrjv8FlvBj-Fr5kkbFA3mDNAc",
  });

  if (!isLoaded) {
    return <div>no work</div>;
  }
  return (
    <>
      <div>
        <h1 className="gmcH1 display-3 d-flex">
          <button className="btn btn-warning btn-lg">Buy me a coffee</button>
        </h1>
      </div>
      <GoogleMap
        mapContainerClassName="mapStyle"
        center={center}
        zoom={18}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />

        <Marker
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
        />

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat + 0.00001, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <MarkerInfo />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  );
}

export default GoogleMapsComponent;
