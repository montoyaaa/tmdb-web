import { createSlice } from "@reduxjs/toolkit";

import { getTrendingMovies } from "./actions";

export const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    movies: {},
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
  },
});

export const actions = {
  getTrendingMovies,
};
