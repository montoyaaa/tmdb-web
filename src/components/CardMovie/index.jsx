import React from "react";
import { useHistory } from "react-router-dom";

import formattedDate from "../../utils/dateFormat";

const CardMovie = ({ movie, orientation }) => {
  const history = useHistory();

<<<<<<< Updated upstream
=======
  let movieOverview = movie.overview;
  if (movieOverview.length > 150) {
    movieOverview = movieOverview.substring(0, 150) + "...";
  }

  const getImageOrientation = () => {
    switch (orientation) {
      case "landscape":
        return movie.backdrop_path;
      case "portrait":
        return movie.poster_path;
      default:
        return movie.backdrop_path;
    }
  };

>>>>>>> Stashed changes
  return (
    <div className="flex flex-col justify-between w-64 xs:h-full hover:shadow-2xl hover:scale-105 transition-all transform duration-500 max-w-xs bg-primary-50 rounded-md shadow-lg overflow-hidden">
      <div>
        {getImageOrientation() ? (
          <img
<<<<<<< Updated upstream
            src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
=======
            src={`https://image.tmdb.org/t/p/original${getImageOrientation()}`}
>>>>>>> Stashed changes
            alt=""
          />
        ) : (
          <img src="/assets/images/empty.png" alt="" />
        )}
      </div>
<<<<<<< Updated upstream
      <div className="p-3 space-y-3">
        <h3 className="text-gray-700 font-semibold text-md">{movie.title}</h3>
        <p className="text-sm text-gray-900 leading-sm">
          Estreia: {formattedDate(movie?.release_date)}
        </p>
        <p>
          <span className="flex">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-5 text-colors-amber-400"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {movie.vote_average}
          </span>
        </p>
      </div>
      <button
        onClick={() => history.push(`/movie/${movie.id}`)}
        className="hover:bg-primary-600 bg-gradient-to-r from-primary-900 bg-colors-teal-700 uppercase tracking-widest w-full flex justify-center py-2 text-colors-white font-semibold transition duration-300 "
      >
        Sobre
      </button>
    </div>
=======
      {orientation !== "portrait" && (
        <div className="cardMovieInfo--section">
          <div className="cardMovieInfo--playSection">
            <div className="cardMovieInfo--playSectionButton">
              <ReactSVG width={40} src="/assets/svg/play-circle-regular.svg" />
              Reproduzir
            </div>
            <div className="cardMovieInfo--playSectionActions">
              <ReactSVG width={25} src="/assets/svg/plus-solid.svg" />
              <ReactSVG width={25} src="/assets/svg/ban-solid.svg" />
            </div>
          </div>
          <div className="cardMovieInfo--Details">
            <h3>Incluído no pacote</h3>
            <h2>{movie.title}</h2>
            <p>{movieOverview}</p>
            <div className="cardMovieInfo--DetailsFooter">
              <p>{formattedDate(movie?.release_date)}</p>
              <p>
                <span className="flex">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-5 text-colors-amber-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  {movie.vote_average}
                </span>
              </p>
              <ReactSVG width={18} src="/assets/svg/comment-alt-regular.svg" />
            </div>
          </div>
        </div>
      )}
    </CardMovieInfo>
>>>>>>> Stashed changes
  );
};

export default CardMovie;
