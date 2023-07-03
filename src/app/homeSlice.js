import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
      urls: {},
      genres: {}
  },
  reducers: {
    getUrls:(state,action)=>{
        state.urls=action.payload;
    },
    getGenres:(state,action)=>{
        state.genres=action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { getUrls,getGenres } = homeSlice.actions;

export default homeSlice.reducer;