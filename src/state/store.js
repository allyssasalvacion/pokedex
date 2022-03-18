import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./pages/dashboard/slice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
