import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies: null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies =  action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo  =  action.payload;
        },
        removeMovie: (state,action) =>{
            return null;
        }
    }
});

export const { addNowPlayingMovies,removeMovie,addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;