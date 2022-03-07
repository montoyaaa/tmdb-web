<<<<<<< Updated upstream
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ReactSVG from "react-inlinesvg";
=======
import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> Stashed changes

import Trending from "../Trending";

import ListSection from "../../components/ListSection";
import VideoBanner from "../../components/VideoBanner";

// Redux Actions
import { actions } from "./redux/slice";

const HomePage = () => {
<<<<<<< Updated upstream
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
=======
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(actions.getTrendingMovies());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const promise = dispatch(actions.getTrendingTvs());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const { trendingMovies, tv_series } = useSelector(({ home }) => ({
    trendingMovies: home.movies,
    tv_series: home.series,
  }));
  console.log(trendingMovies);
  return (
    <div>
      <VideoBanner />
      <div id="content">
        <Switch>
          <Route exact path="/trendings">
            <Trending />
          </Route>
          <Route exact path="/">
            <ListSection
              title="Top filmes da semana"
              goToAll="/trendings#trendings"
              link="/movie"
              list={trendingMovies}
            />
            <ListSection
              title="Top séries da semana"
              goToAll="/trendings#trendings"
              link="/movie"
              list={tv_series}
            />
          </Route>
        </Switch>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default HomePage;
