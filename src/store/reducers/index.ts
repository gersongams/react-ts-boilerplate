import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";

const rootReducer = combineReducers({
  global: globalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
