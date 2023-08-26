import { useState } from 'react'
import './App.css'
import movieData from './mockData'
import AllMovies from './components/AllMovies/AllMovies'
import SingleMovie from './components/SingleMovie/SingleMovie'

export default function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [singleMovie, setSingleMovie] = useState(false)

  const selectSingleMovie = id => {
    const selectedMovie = movies.find(movie => movie.id === id)

    return selectSingleMovie(selectedMovie)
  }

  const returnAllMovies = () => {
    setSingleMovie(false)
  }

  return (
    <>
      {singleMovie ? (
        <SingleMovie
          singleMovie={singleMovie}
          returnAllMovies={returnAllMovies}
        />
      ) : (
        <AllMovies movies={movies} selectSingleMovie={selectSingleMovie} />
      )}
    </>
  )
}
