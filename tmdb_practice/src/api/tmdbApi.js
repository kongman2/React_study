import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

// 현재 상영중인 영화리스트
export const getMovies = async (page = 1) => {
   //'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR'
   const response = await tmdbApi.get('/movie/now_playing', {
      // 쿼리스트링
      language: 'ko-KR',
      page,
   })
   return response
}

// 영화 상세페이지
export const getMovieDetails = async (movieId) => {
   //https://api.themoviedb.org/3/movie/movie_id?language=ko-KR
   const response = await tmdbApi.get(`movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export default tmdbApi
