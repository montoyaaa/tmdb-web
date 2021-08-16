import api from "../../../services/api";

const { REACT_APP_API_KEY } = process.env;

const SEARCH_URL = "/3/search/movie";

const search = (params) => {
  return api.get(
    `${SEARCH_URL}?api_key=${REACT_APP_API_KEY}&language=pt-BR&query=${
      params.searchText
    }&page=${params.page ?? 1}`
  );
};

export { search };
