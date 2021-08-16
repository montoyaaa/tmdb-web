import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./crud";

const getTrendingMovies = createAsyncThunk(
  "trending/fetch",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await api.getTrendingMovies(page);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { getTrendingMovies };
