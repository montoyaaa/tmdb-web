import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./crud";

const getMovie = createAsyncThunk(
  "view/get",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.getMovie(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { getMovie };
