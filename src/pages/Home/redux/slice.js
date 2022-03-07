import { createSlice } from "@reduxjs/toolkit";

import { getTrendingMovies, getTrendingTvs } from "./actions";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    movies: {},
    series: {},
    listLoading: false,
    actionLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTrendingMovies.pending]: (state, action) => {
      state.actionLoading = true;
    },
    [getTrendingMovies.fulfilled]: (state, { payload }) => {
      const { results } = payload;
      state.movies = {
        ...payload,
        results: results?.sort((a, b) => b.vote_average - a.vote_average),
      };
      state.actionLoading = false;
    },
    [getTrendingMovies.rejected]: (state, action) => {
      state.actionLoading = false;
    },

    [getTrendingTvs.pending]: (state, action) => {
      state.actionLoading = true;
    },
    [getTrendingTvs.fulfilled]: (state, { payload }) => {
      const { results } = payload;
      state.series = {
        ...payload,
        results: results?.sort((a, b) => b.vote_average - a.vote_average),
      };
      state.actionLoading = false;
    },
    [getTrendingTvs.rejected]: (state, action) => {
      state.actionLoading = false;
    },
  },
});

export const actions = {
  getTrendingMovies,
  getTrendingTvs,
};
