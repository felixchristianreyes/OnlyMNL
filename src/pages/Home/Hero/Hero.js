/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Hero.css";
import { BsSearch } from "react-icons/bs";
import bar from "../../../images/icons/bar.png";
import toilet from "../../../images/icons/toilet.png";
import store from "../../../images/icons/store.png";

const Hero = () => {
  const [url, setUrl] = useState();

  function handleInput(e) {
    setUrl(e.target.value);
  }
  return (
    <section
      id="hero"
      className="d-flex align-items-center pb-5 m-0"
      data-testid="Hero"
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9">
            <div className="card p-4 mt-3 rounded-pill">
              <h3 className="heading my-4 text-center">
                What are you looking for?
              </h3>
              <div className="d-flex justify-content-center px-5 search12">
                <div className="input-group input-group-lg">
                  <span
                    className="input-group-text text-white onlyLeft"
                    id="inputGroup-sizing-lg"
                  >
                    ONLY/
                  </span>
                  <input
                    name="search"
                    type="text"
                    className="form-control"
                    onChange={handleInput}
                    placeholder="ex. cr / bars / karinderya"
                  />
                  <a href={url} className="search-icon">
                    <BsSearch />
                  </a>
                </div>
              </div>
              <div className="row mt-4 g-1 px-4 mb-5">
                <div className="col-md-4 col-sm-6">
                  <a href="cr">
                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                      <img src={toilet} />
                      <div className="text-center mg-text">
                        <span className="mg-text text-dark">Comfort Room</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 col-sm-6">
                  <a href="karinderya">
                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                      <img src={store} width="50" />
                      <div className="text-center mg-text">
                        <span className="mg-text text-dark">Karinderya</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 col-sm-6">
                  <a href="bar">
                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                      <img src={bar} width="50" />
                      <div className="text-center mg-text">
                        <span className="mg-text text-dark">Bars</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
