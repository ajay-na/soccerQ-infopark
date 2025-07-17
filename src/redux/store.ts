import { configureStore } from "@reduxjs/toolkit";
import dayListReducer from "./dayListSlice";
export default configureStore({ reducer: { days: dayListReducer } });
