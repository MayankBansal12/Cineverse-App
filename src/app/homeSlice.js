import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    urls: {}, // Initial state for storing URLs
    genres: {} // Initial state for storing genres
  },
  reducers: {
    getUrls: (state, action) => {
      // Reducer function for updating URLs
      state.urls = action.payload;
    },
    getGenres: (state, action) => {
      // Reducer function for updating genres
      state.genres = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { getUrls, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
