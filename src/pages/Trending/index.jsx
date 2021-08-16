import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import CardMovie from "../../components/CardMovie";
import { actions } from "./redux/slice";

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

      {movies?.results?.length !== 0 && (
        <div className="flex justify-center flex-wrap gap-4 p-4">
          {movies?.results?.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <div className="flex justify-center bg-colors-blueGray-800 ">
        <ReactPaginate
          containerClassName={"flex gap-3 p-5 justify-center items-center"}
          pageClassName={
            "flex bg-colors-blueGray-200 h-10 w-10 flex items-center justify-center rounded-full"
          }
          nextClassName={
            "flex bg-colors-blueGray-200 h-10 w-20 flex items-center justify-center rounded-full"
          }
          previousClassName={
            "flex bg-colors-blueGray-200 h-10 w-20 flex items-center justify-center rounded-full"
          }
          pageCount={movies?.total_pages}
          onPageChange={(e) =>
            dispatch(actions.getTrendingMovies(e.selected + 1))
          }
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          activeClassName={
            "flex bg-colors-blueGray-800 text-colors-white border h-10 w-10 flex items-center justify-center rounded-full"
          }
          initialPage={1}
          previousLabel={"PREV"}
          nextLabel={"NEXT"}
          breakLabel={"..."}
          breakClassName={
            "flex bg-colors-blueGray-200 h-10 w-10 flex items-center justify-center rounded-full"
          }
        />
      </div>
    </div>
  );
};

export default Trending;
