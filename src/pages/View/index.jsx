import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import formattedDate from "../../utils/dateFormat";
import { actions } from "./redux/slice";

const View = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(actions.getMovie(match.params.id));
    return () => {
      promise.abort();
    };
  }, [dispatch, match.params.id]);

  const { view, listLoading } = useSelector(({ view }) => ({
    view: view.movie,
    listLoading: view.listLoading,
  }));

  return (
    !listLoading && (
      <div className="h-screen flex justify-around pt-36 sm:pt-16">
        <div className="grid grid-cols-1  lg:grid-cols-2 md:px-8 md:py-12 md:gap-x-8 lg:py-16">
          <div className="self-end relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black md:bg-none">
            <p className="text-md font-medium text-colors-white md:mb-1">
              {view?.original_title}
            </p>
            <h2 className="text-xl font-semibold text-colors-white md:text-2xl md:leading-7 md:text-black lg:text-3xl">
              {view?.title}
            </h2>
          </div>
          <div className="col-start-1 row-start-2 px-4 md:pb-3">
            <div className="flex items-center text-md font-medium my-5 lg:mt-2 lg:mb-4">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-colors-amber-300"
              >
                <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
              </svg>
              <div className="ml-1">
                <span className="text-colors-amber-300">
                  {view?.vote_average}
                </span>
                <span className="md:hidden lg:inline text-colors-amber-300 mx-1">
                  ({view?.vote_count})
                </span>
              </div>
              <div className="text-base font-normal  mx-2">·</div>
              <div className="text-colors-white">
                Lançamento: {formattedDate(view?.release_date)}
              </div>
            </div>
            <hr className="w-full border-gray-300 hidden md:block md:mb-10" />
            <div className="col-start-1 row-start-3 px-4 bg-blueGray-600">
              <p className="flex items-center text-colors-white text-md ">
                {view?.overview}
              </p>
            </div>
          </div>

          <div className="col-start-1 row-start-1 flex lg:col-start-2 lg:row-span-3">
            <div className="w-full grid grid-cols-3 grid-rows-3 gap-2">
              <div className="relative col-span-3 row-span-3 lg:row-span-2 lg:col-span-2">
                <img
                  src={`https://image.tmdb.org/t/p/original${view.backdrop_path}`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover bg-gray-100 md:rounded-lg"
                />
              </div>
              <div className="relative hidden row-span-2 lg:block">
                <img
                  src={`https://image.tmdb.org/t/p/original${view.poster_path}`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                />
              </div>
              <div className="relative hidden lg:flex lg:row-span-3 lg:col-span-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${view.backdrop_path}`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover bg-gray-100 md:rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default View;
