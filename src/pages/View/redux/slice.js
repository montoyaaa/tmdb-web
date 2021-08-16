import { createSlice } from "@reduxjs/toolkit";

import { getMovie } from "./actions";

export const viewSlice = createSlice({
  name: "view",
  initialState: {
    movie: {},
    listLoading: false,
    actionLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getMovie.pending]: (state, action) => {
      state.listLoading = true;
    },
    [getMovie.fulfilled]: (state, { payload }) => {
      state.movie = payload;
      state.listLoading = false;
    },
    [getMovie.rejected]: (state, action) => {
      state.listLoading = false;
    },
  },
});

export const actions = {
  getMovie,
};
