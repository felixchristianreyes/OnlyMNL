/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Hero.css";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center pb-5 m-0"
      data-testid="Hero"
    >
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-9">
            <div class="card p-4 mt-3 rounded-pill">
              <h3 class="heading my-4 text-center">
                What are you looking for?
              </h3>
              <div class="d-flex justify-content-center px-5">
                <div class="input-group input-group-lg">
                  <span
                    class="input-group-text text-white onlyLeft"
                    id="inputGroup-sizing-lg"
                  >
                    ONLY/
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                  <a href="#" class="search-icon">
                    <BsSearch />
                  </a>
                </div>
              </div>
              <div class="row mt-4 g-1 px-4 mb-5">
                <div class="col-md-4 col-sm-6">
                  <div class="card-inner p-3 d-flex flex-column align-items-center">
                    <img src="https://i.imgur.com/Z7BJ8Po.png" width="50" />
                    <div class="text-center mg-text">
                      <span class="mg-text">Comfort Room</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="card-inner p-3 d-flex flex-column align-items-center">
                    <img src="https://i.imgur.com/YLsQrn3.png" width="50" />
                    <div class="text-center mg-text">
                      <span class="mg-text">Karinderya</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="card-inner p-3 d-flex flex-column align-items-center">
                    <img src="https://i.imgur.com/YLsQrn3.png" width="50" />
                    <div class="text-center mg-text">
                      <span class="mg-text">Bars</span>
                    </div>
                  </div>
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
