import { configureStore } from "@reduxjs/toolkit";
import Company from "./slices/Company";

export const store = configureStore({
  reducer: {
    Company: Company,
  },
});
