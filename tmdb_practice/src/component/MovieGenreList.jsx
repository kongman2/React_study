import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieGenres } from '../features/moviesSlice'

function MovieGenreList() {
   const dispatch = useDispatch()
   const { movieGenres, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovieGenres())
   }, [dispatch])

   if (loading) return <p>로딩중..</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>Genres</h1>
         {movieGenres && (
            <ul>
               {movieGenres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
               ))}
            </ul>
         )}
      </div>
   )
}

export default MovieGenreList
