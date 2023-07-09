import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice, // Include the homeSlice reducer under the "home" key
  },
});
