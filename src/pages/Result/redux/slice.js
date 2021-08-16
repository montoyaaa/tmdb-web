import { createSlice } from "@reduxjs/toolkit";

import { search, setSearch, clear } from "./actions";

export const resultSlice = createSlice({
  name: "resultPage",
  initialState: {
    searchResult: {},
    page: 1,
    searchText: undefined,
    listLoading: false,
    actionLoading: false,
    error: null,
  },

  extraReducers: {
    [search.pending]: (state, action) => {
      state.listLoading = true;
    },
    [search.fulfilled]: (state, { payload }) => {
      state.searchResult = payload;
      state.listLoading = false;
    },
    [search.rejected]: (state, action) => {
      state.listLoading = false;
    },
    [setSearch.pending]: (state, action) => {
      state.actionLoading = true;
    },
    [setSearch.fulfilled]: (state, { payload }) => {
      const { query } = payload;
      state.searchText = query;
    },
    [setSearch.rejected]: (state, action) => {
      state.actionLoading = false;
    },
    [clear.pending]: (state, action) => {
      state.actionLoading = true;
    },
    [clear.fulfilled]: (state, action) => {
      state.searchText = undefined;
      state.searchResult = {};
      state.actionLoading = false;
    },
    [clear.rejected]: (state, action) => {
      state.actionLoading = false;
    },
  },
});

export const actions = {
  search,
  setSearch,
  clear,
};
