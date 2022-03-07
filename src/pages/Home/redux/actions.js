import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./crud";

const getTrendingMovies = createAsyncThunk(
  "home/fetch/getTrendingMovies",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await api.getTrendingMovies(page);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const getTrendingTvs = createAsyncThunk(
  "home/fetch/getTrendingTvs",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await api.getTrendingTvs(page);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { getTrendingMovies, getTrendingTvs };
