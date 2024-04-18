import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./Reducers/pageReducer";
import userReducer from "./Reducers/userReducer";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
  },
});
