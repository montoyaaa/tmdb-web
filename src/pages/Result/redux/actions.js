import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./crud";

const search = createAsyncThunk(
  "result/search",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await api.search(params);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const setSearch = createAsyncThunk(
  "result/setSearch",
  async (params, { rejectWithValue }) => {
    try {
      return params;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const clear = createAsyncThunk(
  "result/clear",
  async (_, { rejectWithValue }) => {
    try {
      return _;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { search, setSearch, clear };
