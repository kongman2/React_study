import { Route, Routes } from 'react-router-dom'
import MovieList from '../src/component/MovieList'
import MovieDetail from '../src/component/MovieDetail'
import NotFound from '../src/component/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
