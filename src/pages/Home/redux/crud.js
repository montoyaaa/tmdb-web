import api from "../../../services/api";

const { REACT_APP_API_KEY } = process.env;

const TRENDINGS_URL_API = "/3/trending/movie/week";
const TRENDINGS_TV_SERIES_URL_API = "/3/trending/tv/week";

const getTrendingMovies = (page) => {
  return api.get(
    `${TRENDINGS_URL_API}?api_key=${REACT_APP_API_KEY}&language=pt-BR&page=${
      page ?? 1
    }`
  );
};
const getTrendingTvs = (page) => {
  return api.get(
    `${TRENDINGS_TV_SERIES_URL_API}?api_key=${REACT_APP_API_KEY}&language=pt-BR&page=${
      page ?? 1
    }`
  );
};

export { getTrendingMovies, getTrendingTvs };
