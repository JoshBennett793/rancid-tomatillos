import { useState } from 'react'
import './App.css'
import movieData from './mockData'
import AllMovies from './components/AllMovies/AllMovies'
import SingleMovie from './components/SingleMovie/SingleMovie'

export default function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [selectedSingleMovie, setSelectedSingleMovie] = useState(null)

  const selectSingleMovie = id => {
    const selectedMovie = movies.find(movie => movie.id === id)

    setSelectedSingleMovie(selectedMovie)
  }

  const returnAllMovies = () => {
    setSelectedSingleMovie(null)
  }

  return (
    <>
      {selectedSingleMovie ? (
        <SingleMovie
          selectedSingleMovie={selectedSingleMovie}
          returnAllMovies={returnAllMovies}
        />
      ) : (
        <AllMovies movies={movies} selectSingleMovie={selectSingleMovie} />
      )}
    </>
  )
}
