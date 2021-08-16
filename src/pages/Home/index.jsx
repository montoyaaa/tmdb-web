import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ReactSVG from "react-inlinesvg";

import Trending from "../Trending";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-colors-black">
        <video
          className="opacity-10 h-screen"
          style={{ objectFit: "cover" }}
          preload="auto"
          playsInline
          loop
          autoPlay
          webkit-playsinline="true"
          x5-playsinline="true"
          width="100%"
          height="100%"
        >
          <source src="assets/videos/amz-prime.mp4" type="video/mp4" />
        </video>
        <div className="w-64 sm:w-80 absolute p-10 flex flex-col items-center">
          <ReactSVG
            className="w-40 sm:w-60 my-5 m-auto"
            src="/assets/svg/logo-extended.svg"
          />
          <div className="mt-10 cursor-pointer">
            <Link to="/trendings#trendings">
              <ReactSVG src="/assets/svg/arrow.svg" />
            </Link>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/trendings">
          <Trending />
        </Route>
      </Switch>
    </div>
  );
};

export default HomePage;
