import { useState } from 'react'
import './App.css'
import movieData from './mockData'
import AllMovies from './components/AllMovies/AllMovies'

export default function App() {
  // const movieCards = mockData.map()
  const [movies, setMovies] = useState(movieData.movies)
  console.log(movies)

  return (
    <>
      <AllMovies movies={movies} />
    </>
  )
}
