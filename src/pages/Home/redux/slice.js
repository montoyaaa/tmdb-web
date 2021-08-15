import { createSlice } from "@reduxjs/toolkit";
import { callTypes } from "../../../redux/reducerHelpers";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    movies: [],
    listLoading: false,
    actionsLoading: false,
    error: null,
  },
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    fillMovies: (state, { payload }) => {
      state.movies = payload;
      state.error = null;
      state.actionsLoading = false;
    },
  },
});
