import { combineReducers } from "redux";

import { resultSlice } from "../pages/Result/redux/slice";
import { trendingSlice } from "../pages/Trending/redux/slice";
import { viewSlice } from "../pages/View/redux/slice";

export const rootReducer = combineReducers({
  trending: trendingSlice.reducer,
  result: resultSlice.reducer,
  view: viewSlice.reducer,
});
