import api from "../../../services/api";

const { REACT_APP_API_KEY } = process.env;

const TRENDINGS_URL_API = "/3/trending/movie/week";

const getTrendingMovies = (page) => {
  return api.get(
    `${TRENDINGS_URL_API}?api_key=${REACT_APP_API_KEY}&language=pt-BR&page=${
      page ?? 1
    }`
  );
};

export { getTrendingMovies };
