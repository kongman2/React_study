import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/tmdbApi'
import { getMovieDetails } from '../api/tmdbApi'
import { getMovieGenres } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   console.log(response)
   return response.data.results
})

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

export const fetchMovieGenres = createAsyncThunk('movies/fetchMovieGenres', async () => {
   const response = await getMovieGenres()
   console.log(response)
   return response.data.genres
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      movieGenres: [],
      movieDetails: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieGenres.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieGenres.fulfilled, (state, action) => {
            state.loading = false
            state.movieGenres = action.payload
         })
         .addCase(fetchMovieGenres.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default moviesSlice.reducer
