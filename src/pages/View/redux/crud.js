import api from "../../../services/api";

const { REACT_APP_API_KEY } = process.env;

const MOVIE_URL_API = "/3/movie/";

const getMovie = (id) => {
  return api.get(
    `${MOVIE_URL_API}/${id}?api_key=${REACT_APP_API_KEY}&language=pt-BR`
  );
};

export { getMovie };
