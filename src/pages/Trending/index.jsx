import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardMovie from "../../components/CardMovie";
import { actions } from "./redux/slice";
import Paginator from "../../components/Paginator";

const Trending = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(actions.getTrendingMovies());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const { movies } = useSelector((state) => ({
    movies: state.trending.movies,
  }));

  return (
    <div id="trendings">
      <h1 className="text-center sm:text-left mt-5 sm:ml-5 uppercase font-bold text-colors-white">
        Tendências da semana
      </h1>

      {movies?.total_results !== 0 && (
        <>
          <div className="flex justify-center flex-wrap gap-4 p-4">
            {movies?.results?.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="flex justify-center bg-colors-blueGray-800 p-5">
            <Paginator
              onClick={(e) => {
                dispatch(actions.getTrendingMovies(e.target.value));
                return window.scrollTo(0, document.body.scrollHeight);
              }}
              totalPages={movies?.total_pages}
              currentPage={movies?.page}
              range={1}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Trending;
