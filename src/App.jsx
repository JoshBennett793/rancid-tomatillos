import { useState } from 'react'
import './App.css'
import movieData from './mockData'
import AllMovies from './components/AllMovies/AllMovies'

export default function App() {
  const [movies, setMovies] = useState(movieData.movies)

  return (
    <>
      <AllMovies movies={movies} />
    </>
  )
}
