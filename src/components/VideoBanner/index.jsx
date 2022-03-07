import React from "react";
import ReactSVG from "react-inlinesvg";

import { Link as ScrollLink } from "react-scroll";

const VideoBanner = () => {
  return (
    <div
      style={{ boxShadow: " inset 1px 4px 9px -6px" }}
      className="flex flex-col justify-center items-center bg-colors-black"
    >
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
          <ScrollLink to="content" smooth={true} offset={-100} duration={500}>
            <ReactSVG src="/assets/svg/arrow.svg" />
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
