import React, { useState } from "react";

import ReactSVG from "react-inlinesvg";
import { useHistory } from "react-router";

// import CardMovie from "../../components/CardMovie";

const Carousel = ({ list = [], link }) => {
  const history = useHistory();
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    setScrollX((prev) =>
      prev + Math.round(window.innerWidth / 2) > 0
        ? 0
        : prev + Math.round(window.innerWidth) / 2
    );
  };

  const handleRightArrow = () => {
    setScrollX((prev) =>
      window.innerWidth - list.results.length * 300 >
      prev - Math.round(window.innerWidth / 2)
        ? window.innerWidth - list.results.length * 300 - 30
        : prev - Math.round(window.innerWidth / 2)
    );
  };

  return (
    <div className="overflow-x-hidden">
      <div
        onClick={handleLeftArrow}
        className="absolute left-0 z-50 flex justify-center cursor-pointer arrows"
        style={{
          width: 60,
          height: 450,
          backgroundColor: "rgba(0,0,0,60%)",
        }}
      >
        <ReactSVG src="/assets/svg/arrow.svg" />
      </div>
      <div
        onClick={handleRightArrow}
        className="absolute right-0 z-50 flex justify-center cursor-pointer arrows"
        style={{
          width: 60,
          height: 450,
          backgroundColor: "rgba(0,0,0,60%)",
        }}
      >
        <ReactSVG src="/assets/svg/arrow.svg" />
      </div>

      <div
        className="w-max transition-all ease-in-out duration-500"
        style={{ marginLeft: scrollX }}
      >
        {list?.results?.map((item) => (
          // <CardMovie key={item.id} movie={item} orientation="portrait" />
          <div
            onClick={() => history.push(`${link}/${item.id}`)}
            key={item.id}
            className="inline-block"
          >
            <div
              className="w-full transform scale-90 hover:scale-100 transition-all ease-in-out duration-200 cursor-pointer"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300${item.poster_path})`,
              }}
            >
              <img
                className="invisible"
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
