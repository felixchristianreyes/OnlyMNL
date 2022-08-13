import React from "react";
import GoogleMapsComponent from "../Main/GoogleMapsComponent/GoogleMapsComponent";

const Form = () => {
  return (
    
    <div className="container">
   
        <h1>Marker Data Form</h1>
      <form>
        <div className="form-group">
          <label for="name">Name (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />

          <label for="lat">Latitude</label>
          <input
            disabled
            type="number"
            className="form-control"
            id="lat"
            placeholder="Automatically filled when place a marker"
          />
          <label for="lat">Longitude</label>
          <input
            disabled
            type="number"
            className="form-control"
            id="lng"
            placeholder="Automatically filled when place a marker"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
