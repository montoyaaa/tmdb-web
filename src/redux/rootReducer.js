import { combineReducers } from "redux";

import { homeSlice } from "../pages/Home/redux/slice";

export const rootReducer = combineReducers({
  home: homeSlice.reducer,
});
