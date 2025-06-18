import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMovieDetails } from '../../features/moviesSlice'

function MovieDetail() {
   const { movieId } = useParams() // path에 있는 movieId를 가져옴
   const dispatch = useDispatch()
   const { movieDetails, loading, error } = useSelector((state) => state.movies)

   // 맨 처음에 컴포넌트 렌더링시 1번 실행, movieId 바뀔때마다 실행
   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>로딩중..</p>

   if (error) return <p>Error: {error}</p>

   return (
      /*
       ★ 맨처음 렌더링 발생시 movieDetails의 값은 null
          -> 렌더링 이후 useEffect가 실행되면서 movieDetails 값이 들어옴
          -> && 렌더링 연산자를 이용해 movieDetails 값이 있을때만 렌더링 하도록함
      */
      <div style={{ padding: '20px' }}>
         {movieDetails && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title}></img>
               </div>
               <div>
                  <h2>{movieDetails.title}</h2>
                  <h3>줄거리</h3>
                  <p>{movieDetails.overview}</p>

                  <h3>장르</h3>
                  <p>{movieDetails.genres.map((genre) => `${genre.name}`).join(', ')}</p>

                  <h3>개봉일</h3>
                  <p>{movieDetails.release_date}</p>

                  <h3>평점</h3>
                  <p>{movieDetails.vote_average}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail
